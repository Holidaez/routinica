from flask import Blueprint, jsonify, json, session, request
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

@habits_routes.route('/edit', methods=['PUT'])
@login_required
def edit_habit():
    form = AddEditHabit()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edited_habit = json.loads(request.data.decode('UTF-8'))
        habit = Habits.query.get(edited_habit['id'])
        habit.userId = edited_habit['userId']
        habit.title = edited_habit['title']
        habit.notes = edited_habit['notes']
        habit.difficulty = edited_habit['difficulty']
        habit.reset_counter = edited_habit['reset_counter']
        habit.positive_counter = edited_habit['positive_counter']
        habit.negative_counter = edited_habit['negative_counter']
        habit.positive_habit = edited_habit['positive_habit']
        habit.negative_habit = edited_habit['negative_habit']
        habit.strong_habit = edited_habit['strong_habit']
        habit.display_order = edited_habit['display_order']
        db.session.commit()
        savedhabit = habit.to_dict()
        return savedhabit
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
@habits_routes.route('/<id>', methods=['GET'])
@login_required
def get_single_habit(id):
    single_habit = Habits.query.get(id)
    return single_habit.to_dict()
    
@habits_routes.route('/<id>', methods=['DELETE'])
@login_required
def delete_habit(id):
    todelete = Habits.query.get(id)
    db.session.delete(todelete)
    db.session.commit()
    return {'message': 'Successfully deleted'}
