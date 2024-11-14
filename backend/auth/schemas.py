from pydantic import BaseModel
from typing import Union

class userSignUp(BaseModel):
    username:str
    email:str
    password:str
    confirmPassword:str

class userSignin(BaseModel):
    email:str
    password:str

class loginResponse(BaseModel):
    access_token:str
    token_type:str
    message:str = None

class UserCreate(BaseModel):
    usernamename:str
    username:str
    password:str

class token(BaseModel):
    acces_token:str
    token_type:str

class tokenData(BaseModel):
    email: Union[str,None] = None