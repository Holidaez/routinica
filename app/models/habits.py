from .db import db, environment, SCHEMA, add_prefix_for_prod
from .tags import habits_tags
class Habits(db.Model):
  __tablename__ = 'habits'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048)) #changed to can be nullable
  difficulty = db.Column(db.Integer, nullable=False) #changed from string to integer
  reset_counter = db.Column(db.String(64), nullable=False)
  positive_counter = db.Column(db.Integer, nullable=False)
  negative_counter = db.Column(db.Integer, nullable=False)
  positive_habit = db.Column(db.Boolean, nullable=False)
  negative_habit = db.Column(db.Boolean, nullable=False)
  strong_habit = db.Column(db.Boolean, nullable=False)
  display_order = db.Column(db.Integer, nullable=False, unique=True)

  user = db.relationship('User', back_populates='habits')
  tags = db.relationship('Tags', secondary=habits_tags, back_populates='habits')
  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,
      'title':self.title,
      "notes":self.notes,
      "difficulty":self.difficulty,
      "reset_counter":self.reset_counter,
      "positive_counter":self.positive_counter,
      "negative_counter": self.negative_counter,
      "positive_habit": self.positive_counter,
      "negative_habit": self.negative_habit,
      "strong_habit": self.strong_habit,
      "display_order": self.display_order
      }
