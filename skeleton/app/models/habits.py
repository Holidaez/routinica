from .db import db, environment, SCHEMA

class Habits(db.Model):
  __tablename__ = "habits"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False)
  userId = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048)) #changed to can be nullable
  difficulty = db.Column(db.Integer, nullable=False) #changed from string to integer
  tags = db.Column(db.String(250)) #changed to can be nullable
  reset_counter = db.Column(db.String(64), nullable=False)
  positive_counter = db.Column(db.Integer, nullable=False)
  negative_counter = db.Column(db.Integer, nullable=False)
  positive_habit = db.Column(db.Boolean, nullable=False)
  negative_habit = db.Column(db.Boolean, nullable=False)
  strong_habit = db.Column(db.Boolean, nullable=False)
  display_order = db.Column(db.Integer, nullable=False, unique=True)
