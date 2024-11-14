from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()
mongo_client = None
db = None


async def connect_to_db():
    global mongo_client, db
    try:
        mongo_client = AsyncIOMotorClient(os.getenv("DB_URI"))
        db = mongo_client["Resume_ai"]
        print('connected to db')
        return db
    except Exception as e:
        print(f'error connecting to dbs : {e}') 
    

def get_db():
    if db is not None:
        return db
    else:
        print('db is None in get_db()')