from .db import db, environment, SCHEMA, add_prefix_for_prod
from .tags import daily_tags
class Dailies(db.Model):
  __tablename__ = 'dailies'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  start_date = db.Column(db.String(64), nullable=False)
  repeats = db.Column(db.String(64), nullable=False)
  repeats_on = db.Column(db.String(256), nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(250)) #can be empty
  difficulty = db.Column(db.Integer, nullable=False)
  streak = db.Column(db.Integer, nullable=False)
  due = db.Column(db.Boolean, nullable=False)
  display_order = db.Column(db.Integer, nullable=False, unique=True) #to store order

  user = db.relationship('User', back_populates='dailies');
  dailies_checklist = db.relationship('DailiesChecklist', back_populates='dailies');
  tags = db.relationship('Tags', secondary=daily_tags, back_populates='dailies')

  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      "start_date":self.start_date,
      "repeats":self.repeats,
      "repeats_on":self.repeats_on,
      "title":self.title,
      "notes":self.notes,
      "difficulty": self.difficulty,
      "streak": self.streak,
      "due": self.due,
      "display_order": self.display_order
      }
