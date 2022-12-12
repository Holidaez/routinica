from .db import db, SCHEMA, environment, add_prefix_for_prod

daily_tags = db.Table(
    "daily_tags",
    db.Column(
        "daily_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("dailies.id")),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod('tags.id')),
        primary_key=True
    )
)
if environment == "production":
    daily_tags.schema=SCHEMA

habits_tags = db.Table(
    "habits_tags",
    db.Column(
        "habits_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("habits.id")),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod('tags.id')),
        primary_key=True
    )
)

if environment == "production":
    habits_tags.schema=SCHEMA

todos_tags = db.Table(
    "todos_tags",
    db.Column(
        "todos_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("todos.id")),
        primary_key=True
    ),
    db.Column(
        "tags",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod('tags.id')),
        primary_key=True
    )
)

if environment == "production":
    todos_tags.schema=SCHEMA


class Tags(db.Model):
  __tablename__ = 'tags'

  # ALL models should have this!!!
  if environment == "production":
    __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(64), nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))

  user = db.relationship('User', back_populates='tags')
  dailies = db.relationship('Dailies', secondary=daily_tags, back_populates='tags')
  habits = db.relationship('Habits', secondary=habits_tags, back_populates='tags')
  todos = db.relationship('ToDos', secondary=todos_tags, back_populates='tags')

  def to_dict(self):
    return {
      "id":self.id,
      "title":self.title,
      "checked":self.checked,
    }
