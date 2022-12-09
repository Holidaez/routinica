from .db import db
from .user import User
from .db import environment, SCHEMA
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
