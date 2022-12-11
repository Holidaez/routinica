from .db import db, environment, SCHEMA

class ToDos(db.Model):
  __tablename__ = 'todos'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, nullable=False)
  checklist = db.Column(db.String(250))
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048))
  difficulty = db.Column(db.Integer, nullable=False)
  tags = db.Column(db.String(250))
  due_date = db.Column(db.String(64), nullable=False)
  completed = db.Column(db.Boolean, nullable=False)
  display_order = db.Column(db.Integer, nullable=False, unique=True)

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      'checklist': self.checklist,
      'title':self.title,
      "notes":self.notes,
      "difficulty":self.difficulty,
      "tags":self.tags,
      "due_date":self.due_date,
      "completed":self.completed,
      "display_order": self.display_order
      }