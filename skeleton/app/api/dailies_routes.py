from flask import Blueprint, jsonify, session, request
from ..models import Dailies, db, User
from flask_login import login_required, current_user
# from ..forms import AddEditDaily

dailies_routes = Blueprint('dailies', __name__)

@dailies_routes.route('/')
# @login_required
def get_all_dailies():
    """
    Querry all dailies and return them in a list of dictionaries ordered by display order
    """
    dalies = Dailies.query.filter(Dailies.userId == User.id).order_by(Dailies.display_order)
    return {'dailies': [daily.to_dict() for daily in dalies]}



@dailies_routes.route('/test')
@login_required
def get_user_test():
    """
    Testing Route for relationships
    """
    #TODO Refactor comprehensions
    return_user = current_user.to_dict()
    dailies = {}
    habits = {}
    todos = {}
    print("THIS IS THE CURRENT USER AVATAR",current_user.avatar)
    for daily in current_user.dailies:
        dailies[daily.id] = daily.to_dict()

    for habit in current_user.habits:
        habits[habit.id] = habit.to_dict()

    for todo in current_user.todos:
        todos[todo.id] = todo.to_dict()

    current_state = {"user": return_user, "dailies": dailies, "habits": habits, "todos": todos}
    return current_state

@dailies_routes.route('/add', methods=['POST'])
@login_required
def add_edit_a_daily():
    form = AddEditDaily()
    if form.validate_on_submit():
        new_daily = Dailies(
            userId = form.data['userId'],
            checklist = form.data['checklist'],
            start_date = form.data['start_date'],
            repeats = form.data['repeats'],
            repeats_on = form.data['repeats_on'],
            title = form.data['title'],
            notes = form.data['notes'],
            difficulty = form.data['difficulty'],
            tags = form.data['tags'],
            streak = form.data['streak'],
            due = form.data['due'],
            display_order = form.data['display_order']
        )
        db.session.add(new_daily)
        db.session.commit()
        return new_daily.to_dict()
