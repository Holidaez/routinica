from .db import db, environment, SCHEMA, add_prefix_for_prod
from .tags import todos_tags
class ToDos(db.Model):
  __tablename__ = 'todos'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  title = db.Column(db.String(64), nullable=False)
  notes = db.Column(db.String(2048))
  difficulty = db.Column(db.Integer, nullable=False)
  due_date = db.Column(db.String(64), nullable=False)
  completed = db.Column(db.Boolean)
  display_order = db.Column(db.Integer, nullable=False, unique=True)

  user = db.relationship('User', back_populates='todos')
  todos_checklist = db.relationship('ToDosChecklist', back_populates='todos')
  tags = db.relationship('Tags', secondary=todos_tags, back_populates='todos')
  def to_dict(self):
    return {
      'id': self.id,
      'userId': self.userId,

      'title':self.title,
      "notes":self.notes,
      "difficulty":self.difficulty,

      "due_date":self.due_date,
      "completed":self.completed,
      "display_order": self.display_order
      }
