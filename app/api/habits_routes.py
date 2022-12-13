from flask import Blueprint, jsonify, session, request
from ..models import Habits, db, User
from ..forms import AddEditHabit
from flask_login import login_required
from .auth_routes import validation_errors_to_error_messages


habits_routes = Blueprint('habits', __name__)

@habits_routes.route('/')
# @login_required
def get_all_habits():
    """
    query all habits and return them in a list of dictionaries ordered by display order
    """
    habits = Habits.query.filter(Habits.userId == User.id).order_by(Habits.display_order)
    return { 'habits': [habit.to_dict() for habit in habits]}

@habits_routes.route('/add', methods=['POST'])
@login_required
def add_new_habit():
    form = AddEditHabit()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_habit = Habits(
            userId = form.data['userId'],
            title = form.data['title'],
            notes = form.data['notes'],
            difficulty = form.data['difficulty'],
            reset_counter = form.data['reset_counter'],
            positive_counter= form.data['positive_counter'],
            negative_counter = form.data['negative_counter'],
            positive_habit = form.data['positive_habit'],
            negative_habit = form.data['negative_habit'],
            strong_habit = form.data['strong_habit'],
            display_order = form.data['display_order']
        )
        db.session.add(new_habit)
        db.session.commit()
        return new_habit.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
