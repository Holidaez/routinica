from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, Length


class AddAvatar(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    body = StringField('body', validators=[DataRequired()])
    skin = StringField('skin', validators=[DataRequired()])
    bangs = StringField('bangs')
    style = StringField('style')
    facial = StringField('facial')
    glasses = StringField('glasses')
    wheelchair = StringField('wheelchair')
    accent = StringField('accent')
    animal_ears = StringField('animal_ears')
    animal_tails = StringField('animal_tails')
    headband = StringField('headband')
    background = StringField('background', validators=[DataRequired()])
