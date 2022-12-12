from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddEditDaily(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    checklist = StringField('Checklist')
    start_date = StringField('Start Date', validators=[DataRequired()])
    repeats = StringField('Repeats', validators=[DataRequired()])
    repeats_on = IntegerField('Repeats On', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()])
    notes = StringField('Notes')
    difficulty = IntegerField('Difficulty', validators=[DataRequired()])
    tags = StringField('Tags')
    streak = IntegerField('Streak', validators=[DataRequired()])
    due = BooleanField('Due', validators=[DataRequired()])
    display_order = IntegerField('Display Order', validators=[DataRequired()])
