from .db import db

class Avatar(db.Model):
  __tablename__ = "avatar"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False)
  userId = db.Column(db.Integer, nullable=False)
  body = db.Column(db.String(256), nullable=False)
  skin = db.Column(db.String(256), nullable=False)
  hair = db.Column(db.String(256), nullable=False)
  glasses = db.Column(db.String(256), nullable=True)
  wheelchair = db.Column(db.String(256), nullable=True)
  accent = db.Column(db.String(256), nullable=True)
  animal_ears = db.Column(db.String(256), nullable=True)
  animal_tails = db.Column(db.String(256), nullable=True)
  headband = db.Column(db.String(256), nullable=True)
  background = db.Column(db.String(256), nullable=False)
