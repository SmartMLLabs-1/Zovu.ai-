from pydantic import BaseModel

class userInDB(BaseModel):
    email:str
    hashedPassword:str