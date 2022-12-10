from .db import db, environment, SCHEMA

class Avatar(db.Model):
  __tablename__ = "avatar"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, nullable=False)
  body = db.Column(db.String(256), nullable=False)
  skin = db.Column(db.String(256), nullable=False)
  bangs = db.Column(db.String(256), nullable=False)
  style = db.Column(db.String(256), nullable=False)
  facial = db.Column(db.String(256), nullable=True)
  glasses = db.Column(db.String(256), nullable=True)
  wheelchair = db.Column(db.String(256), nullable=True)
  accent = db.Column(db.String(256), nullable=True)
  animal_ears = db.Column(db.String(256), nullable=True)
  animal_tails = db.Column(db.String(256), nullable=True)
  headband = db.Column(db.String(256), nullable=True)
  background = db.Column(db.String(256), nullable=False)
