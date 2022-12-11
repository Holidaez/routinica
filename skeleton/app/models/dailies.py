from .db import db, environment, SCHEMA

class Dailies(db.Model):
  __tablename__ = 'dailies'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, nullable=False)
  checklist = db.Column(db.String(250)) #can be empty
  start_date = db.Column(db.String(64), nullable=False)
  repeats = db.Column(db.String(64), nullable=False)
  repeats_on = db.Column(db.Integer, nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(250)) #can be empty
  difficulty = db.Column(db.Integer, nullable=False)
  tags = db.Column(db.String(250)) #can be empty
  streak = db.Column(db.Integer, nullable=False)
  due = db.Column(db.Boolean, nullable=False)
  display_order = db.Column(db.Integer, nullable=False, unique=True) #to store order

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      'checklist':self.checklist,
      "start_date":self.start_date,
      "repeats":self.repeats,
      "repeats_on":self.repeats_on,
      "title":self.title,
      "notes":self.notes,
      "difficulty": self.difficulty,
      "tags": self.tags,
      "streak": self.streak,
      "due": self.due,
      "display_order": self.display_order
      }
