from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditDaily(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    checklist = StringField('Checklist')
    start_date = StringField('Start Date', validators=[DataRequired()])
    repeats = StringField('Repeats', validators=[DataRequired()])
    repeats_on = StringField('Repeats On')
    title = StringField('Title', validators=[DataRequired(), Length(min=4, max=64, message='The title must be between 4 and 64 characters.')])
    notes = StringField('Notes', validators=[Length(max=250, message='Notes must be less than 250 characters.')])
    difficulty = IntegerField('Difficulty', validators=[DataRequired()])
    tags = StringField('Tags')
    streak = IntegerField('Streak', validators=[DataRequired()])
    due = BooleanField('Due')
    display_order = IntegerField('Display Order', validators=[DataRequired()])
