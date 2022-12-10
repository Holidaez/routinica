from .db import db
from .user import User
from .db import environment, SCHEMA
from .dailies import Dailies
from .habits import Habits
from .todos import ToDos
from .avatar import Avatar
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
