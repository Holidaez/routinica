from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditDaily(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    checklist = StringField('Checklist')
    start_date = StringField('Start Date', validators=[DataRequired()])
    repeats = StringField('Repeats', validators=[DataRequired()])
    repeats_on = StringField('Repeats On')
    title = StringField('Title', validators=[DataRequired(), Length(min=4, message='Minimum length of 4 characters required for a title.')])
    notes = StringField('Notes', validators=[Length(max=3000, message='Notes must be less than 3000 characters.')])
    difficulty = IntegerField('Difficulty', validators=[DataRequired()])
    tags = StringField('Tags')
    streak = IntegerField('Streak', validators=[DataRequired()])
    due = BooleanField('Due', validators=[DataRequired()])
    display_order = IntegerField('Display Order', validators=[DataRequired()])
