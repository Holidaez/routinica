from flask import Blueprint, jsonify, session, request
from ..models import Dailies, db, User
from flask_login import login_required, current_user

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
    return_user = current_user.to_dict()
    dailies = {}
    habits = {}
    todos = {}

    for daily in current_user.dailies:
        dailies[daily.id] = daily.to_dict()

    for habit in current_user.habits:
        habits[habit.id] = habit.to_dict()

    for todo in current_user.todos:
        todos[todo.id] = todo.to_dict()

    current_state = {"user": return_user, "dailies": dailies, "habits": habits, "todos": todos}
    return current_state
