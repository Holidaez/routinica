from .db import db

class ToDos(db.Model):
  __tablename__ = "todos"

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False)
  userId = db.Column(db.Integer, nullable=False)
  checklist = db.Column(db.String(64), nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048), nullable=False)
  difficulty = db.Column(db.String(64), nullable=False)
  tags = db.Column(db.String(64), nullable=False)
  due_date = db.Column(db.String(64), nullable=False)
  completed = db.Column(db.Boolean, nullable=False)
  priority = db.Column(db.Integer, nullable=False)
