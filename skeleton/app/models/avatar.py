from .db import db, environment, SCHEMA, add_prefix_for_prod

class Avatar(db.Model):
  __tablename__ = 'avatar'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, nullable=False, primary_key=True)
  userId = db.Column("userId", db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
  body = db.Column(db.String(256), nullable=False)
  skin = db.Column(db.String(256), nullable=False)
  bangs = db.Column(db.String(256), nullable=False)
  style = db.Column(db.String(256), nullable=True)
  facial = db.Column(db.String(256), nullable=True)
  glasses = db.Column(db.String(256), nullable=True)
  wheelchair = db.Column(db.String(256), nullable=True)
  accent = db.Column(db.String(256), nullable=True)
  animal_ears = db.Column(db.String(256), nullable=True)
  animal_tails = db.Column(db.String(256), nullable=True)
  headband = db.Column(db.String(256), nullable=True)
  background = db.Column(db.String(256), nullable=False)

  user = db.relationship('User', back_populates='avatar');

  # def to_dict(self):
  #   return {
  #     'id':self.id,
  #     'userId':self.body,
  #     'skin':self.skin,
  #     'bangs':self.bangs,
  #     'style':self.style,
  #     'facial':self.facial,
  #     'glasses':self.glasses,
  #     'wheelchair':self.wheelchair,
  #     'accent':self.accent,
  #     'animal_ears':self.animal_ears,
  #     'animal_tails':self.animal_tails,
  #     'headband':self.headband,
  #     'background':self.background
  #   }
