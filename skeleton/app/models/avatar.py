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
  skin = db.Column(db.String(64), nullable=False)
  start_date = db.Column(db.String(64), nullable=False)
  repeats = db.Column(db.String(64), nullable=False)
  repeats_on = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.Integer, nullable=False)
  difficulty = db.Column(db.Boolean, nullable=False)
  tags = db.Column(db.Boolean, nullable=False)
  adjust_streak = db.Column(db.Integer, nullable=False)
  due = db.Column(db.Boolean, nullable=False)
  priority = db.Column(db.Integer, nullable=False)
