from .db import db, SCHEMA, environment, add_prefix_for_prod

class ToDosChecklist(db.Model):
  __tablename__ = 'todos_checklist'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(64), nullable=False)
  checked = db.Column(db.Boolean, nullable=False)
  todosId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('Dailies')))

  todos = db.relationship('ToDo', back_populates='todos_checklist')

  def to_dict(self):
    return {
      "id":self.id,
      "title":self.title,
      "checked":self.checked,
      "todosId":self.todosId
    }
