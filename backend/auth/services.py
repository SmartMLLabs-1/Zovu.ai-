from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi import Depends, HTTPException,status
from fastapi.security import OAuth2PasswordBearer
from typing import Union

SECRET_KEY = "9f9d51bc70ef21ca5c14f307980a29d8fbf637cd22d2ab0b5435db8b50bc6b4b"
ALGORITHM = 'HS256'
ACCESS_TOKEN_EXPIRY = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl='login')

def create_access_token(data:dict, expires_delta:Union[timedelta,None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode,SECRET_KEY,algorithm=ALGORITHM)
    return encoded_jwt

async def verify_token(token:str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate user",
        headers={"WWW-Authenticate":"Bearer"}
    )
    try:
       payload = jwt.decode(token,SECRET_KEY,algorithms=[ALGORITHM])
       email: str = payload.get("sub")
       if email is None:
          raise credentials_exception
    except JWTError:
        raise credentials_exception
    return email
           

