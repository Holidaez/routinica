from .db import db

class Dailies(db.Model):
  __tablename__ = "avatar"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False)
  userId = db.Column(db.Integer, nullable=False)
  shirt_size = db.Column(db.String(8))
  shirt_color = db.Column(db.String(32), nullable=False)
  skin = db.Column(db.String(128), nullable=False)
  hair = db.Column(db.String(128), nullable=False)
  glasses = db.Column(db.String(128), nullable=False)
  wheelchair = db.Column(db.String(128), nullable=False)
  accent = db.Column(db.String(128), nullable=False)
  animal_ears = db.Column(db.String(128), nullable=False)
  animal_tails = db.Column(db.String(128), nullable=False)
  headband = db.Column(db.String(128), nullable=False)
  background = db.Column(db.String(128), nullable=False)
