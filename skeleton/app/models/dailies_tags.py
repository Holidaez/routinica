from .db import db, SCHEMA, environment

class ToDosChecklist(db.Model):
  __tablename__ = 'todos_checklist'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}
