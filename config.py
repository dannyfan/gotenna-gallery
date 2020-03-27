"""App configuration."""
import os
from dotenv import load_dotenv

load_dotenv()

class Config():
    """Base configuration."""
    SECRET_KEY = os.getenv('SECRET_KEY')
    CSV_NAME = os.getenv('CSV_NAME')
