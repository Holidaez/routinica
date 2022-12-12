from .db import db, SCHEMA, environment, add_prefix_for_prod

daily_tags = db.Table(
    "daily_tags",
    db.Column(
        "daily_id",
        db.Integer,
        db.ForeignKey("dailies.id"),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey('tags.id'),
        primary_key=True
    )
)
habits_tags = db.Table(
    "habits_tags",
    db.Column(
        "habits_id",
        db.Integer,
        db.ForeignKey("habits.id"),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey('tags.id'),
        primary_key=True
    )
)
todos_tags = db.Table(
    "todos_tags",
    db.Column(
        "todos_id",
        db.Integer,
        db.ForeignKey("todos.id"),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey('tags.id'),
        primary_key=True
    )
)
class Tags(db.Model):
  __tablename__ = 'tags'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(64), nullable=False)
#   userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('user.id')))

  dailies = db.relationship('Dailies', secondary=daily_tags, back_populates='tags')
  habits = db.relationship('Habits', secondary=habits_tags, back_populates='tags')
  todos = db.relationship('Todos', secondary=todos_tags, back_populates='tags')

  def to_dict(self):
    return {
      "id":self.id,
      "title":self.title,
      "checked":self.checked,
      "dailiesId":self.dailiesId
    }

