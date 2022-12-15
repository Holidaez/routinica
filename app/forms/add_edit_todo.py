from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditToDo(FlaskForm):
    userId = IntegerField('UserId', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired(), Length(min=4, message='Minimum length of 4 characters required for a title.')])
    notes = StringField('Notes', validators=[Length(max=3000, message='Notes must be less than 3000 characters.')])
    difficulty = IntegerField('Difficulty')
    due_date = StringField('Due Date')
    completed = BooleanField('Completed')
    display_order = IntegerField('Display Order')

