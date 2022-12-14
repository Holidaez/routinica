from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditToDo(FlaskForm):
    userId = IntegerField('UserId', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    notes = StringField('Notes')
    difficulty = IntegerField('Difficulty')
    due_date = StringField('Due Date')
    completed = BooleanField('Completed')
    display_order = IntegerField('Display Order')

