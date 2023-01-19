from .db import db, SCHEMA, environment, add_prefix_for_prod

class RoutinesOrder(db.Model):
    __tablename__ = 'routines_order'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    daily_order = db.Column(db.String)
    todo_order = db.Column(db.String)
    habit_order = db.Column(db.String)

    user = db.relationship('User', back_populates='order')

    def to_dict(self):

        return {
            "id":self.id,
            "userId":self.userId,
            "daily_order": self.daily_order,
            "todo_order": self.todo_order,
            "habit_order": self.habit_order,
        }
