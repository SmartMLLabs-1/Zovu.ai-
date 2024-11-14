import os
from fastapi import status,APIRouter,Request
from fastapi.responses import JSONResponse,RedirectResponse

from authlib.integrations.starlette_client import OAuth
from starlette.config import Config

from auth.schemas import userSignin
from db.database import connect_to_db

config = Config(".env")
Groute = APIRouter()

oauth = OAuth(config)
oauth.register(
    name='google',
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    authorize_params=None,
    access_token_url="https://oauth2.googleapis.com/token",
    access_token_params=None,
    userinfo_endpoint="https://www.googleapis.com/oauth2/v1/userinfo",
    client_kwargs={"scope": "openid profile email"},
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration'
)

@Groute.get("/googleLogin", response_model=userSignin)
async def googleLogin(request:Request):
    redirected_url = os.getenv("GOOGLE_CALLBACK_URL")
    return await oauth.google.authorize_redirect(request,redirected_url)


@Groute.get("/callback")
async def auth_callback(req: Request):
    token = await oauth.google.authorize_access_token(req)
    user_info = token.get('userinfo')

    if not user_info:
       return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content = {"detail":"user does not exist"}
        )
    
    db = await connect_to_db()
    userCollection = db['Users']
    existingUser = await userCollection.find_one({"email":user_info.get("email")})
    if existingUser:
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content = {"detail":"Account already exists with this email"}
        )
    
    newUser = {
        "username":user_info.get("name"),
        "email":user_info.get("email")
    }

    result = await userCollection.insert_one(newUser)
    '''
    return JSONResponse(
        status_code = status.HTTP_201_CREATED,
        content = {
            "message":f"User successfully registered, {result}",
            "username":user_info.get("name"),
            "email":user_info.get("email")
        }
    )
    '''
    return RedirectResponse(url="http://localhost:5173/")

