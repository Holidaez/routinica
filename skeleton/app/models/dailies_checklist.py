from .db import db, SCHEMA, environment

class DailiesChecklist(db.Model):
  __tablename__ = 'dailies_checklist'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(64), nullable=False)
  checked = db.Column(db.Boolean, nullable=False)
  dailiesId = db.Column(db.Integer, db.ForeignKey('Dailies'))

  dailies = db.relationship('Dailies', back_populates='dailies_checklist')

  def to_dict(self):
    return {
      "id":self.id,
      "title":self.title,
      "checked":self.checked,
      "dailiesId":self.dailiesId
    }
