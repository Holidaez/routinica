from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length

class AddEditHabit(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired(), Length(min=4, message='Minimum length of 4 characters required for a title.')])
    notes = StringField('Notes', validators=[Length(max=3000, message='Notes must be less than 3000 characters.')])
    difficulty = IntegerField('Difficulty')
    reset_counter = StringField('Reset Counter')
    positive_counter = IntegerField('Positive Counter')
    negative_counter = IntegerField('Negative Counter')
    positive_habit = BooleanField('Positive Habit')
    negative_habit = BooleanField('Negative Habit')
    strong_habit = BooleanField('Strong Habit')
    display_order = IntegerField('Display Order')
