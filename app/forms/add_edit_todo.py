from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditToDo(FlaskForm):
    userId = IntegerField('UserId', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired(), Length(min=4, max=64, message='The title must be between 4 and 64 characters.')])
    notes = StringField('Notes', validators=[Length(max=250, message='Notes must be less than 250 characters.')])
    difficulty = IntegerField('Difficulty')
    due_date = StringField('Due Date')
    completed = BooleanField('Completed')
    display_order = IntegerField('Display Order')
