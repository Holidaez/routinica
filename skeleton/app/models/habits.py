from .db import db

class Habits(db.Model):
  __tablename__ = "habits"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False)
  userId = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048), nullable=False)
  difficulty = db.Column(db.String(64), nullable=False)
  tags = db.Column(db.String(64), nullable=False)
  reset_counter = db.Column(db.String(64), nullable=False)
  adjust_counter = db.Column(db.Integer, nullable=False)
  desired_habit = db.Column(db.Boolean, nullable=False)
  undesired_habit = db.Column(db.Boolean, nullable=False)
  weak_habit = db.Column(db.Boolean, nullable=False)
  strong_habit = db.Column(db.Boolean, nullable=False)
  priority = db.Column(db.Integer, nullable=False)
