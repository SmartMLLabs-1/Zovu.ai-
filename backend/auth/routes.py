from fastapi import APIRouter, HTTPException,Depends,status
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from auth.services import create_access_token,verify_token
from dotenv import load_dotenv
import os

from db.database import connect_to_db
from auth.schemas import userSignUp,userSignin,loginResponse
from auth.utils import hash_password, verify_password

load_dotenv()
auth_router = APIRouter()

@auth_router.post('/signup')
async def signup(userData:userSignUp):
    {"message":"signup endpoint"}
    db = await connect_to_db()
    userCollection = db['Users']
    existingUser = await userCollection.find_one({"email":userData.email})
    if existingUser:
        return JSONResponse(
            status_code=status.HTTP_409_CONFLICT,
            content = {"detail":"Account already exists with this email"}
        )
    
    if userData.password != userData.confirmPassword:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content = {"detail":"Passwords don't match"}
        )
    
    hashed_password = hash_password(userData.password)

    newUser = {
        "username":userData.username,
        "email":userData.email,
        "password":hashed_password
    }

    result = await userCollection.insert_one(newUser)

    return JSONResponse(
        status_code = status.HTTP_201_CREATED,
        content = {
            "message":"User successfully registered",
            "User_id": str(result.inserted_id)
        }
    )

@auth_router.post('/login', response_model=loginResponse)
async def login(data:userSignin ):
    db = await connect_to_db()
    userCollection = db['Users']

    user = await userCollection.find_one({"email":data.email})

    if not user :
        return JSONResponse(
            status_code=status.HTTP_404_NOT_FOUND,
            content = {
                "message":"User not found"
        }
    )

    success = verify_password(data.password,user['password'])

    if not success:
        return JSONResponse(
            status_code=status.HTTP_400_BAD_REQUEST,
            content = {
                "message":"wrong password"
            }
        )
    
    access_token = create_access_token(data={"sub":user["username"]})
    return {"access_token": access_token, "token_type":"Bearer", "message":"Login successfull"}



