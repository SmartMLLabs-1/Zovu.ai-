from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from starlette.middleware.sessions import SessionMiddleware
from authlib.integrations.starlette_client import OAuth
from starlette.config import Config

from auth.routes import auth_router
from auth.googleAuth import Groute

config = Config(".env")

app = FastAPI()
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:8000/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods
    allow_headers=["*"],  # Allows all headers 
)

app.add_middleware(
    SessionMiddleware,
    secret_key=os.getenv("SESSION_SECRET_KEY")
)


app.include_router(auth_router, prefix="/auth")
app.include_router(Groute, prefix="/auth")

@app.get('/Home')
async def root():
    
    return "welcome to server"
