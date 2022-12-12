from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    # ALL models should have this!!!
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    gold = db.Column(db.Integer, nullable=False)
    experience = db.Column(db.Integer, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    health = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.String(32), nullable=False)
    login_date = db.Column(db.String(64), nullable=False)

    avatar = db.relationship('Avatar', back_populates='user')
    habits = db.relationship('Habits', back_populates='user')
    dailies = db.relationship('Dailies', back_populates='user')
    todos = db.relationship('ToDos', back_populates='user')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'gold':self.gold,
            "experience":self.experience,
            "health":self.health,
            "created_at":self.created_at,
            "level":self.level,
            "login_date":self.login_date,
            # "avatar":self.avatar,
            # "todos":self.todos,
            # "dailies":self.dailies,
            # "habits":self.habits
        }
