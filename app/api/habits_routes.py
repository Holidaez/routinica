from flask import Blueprint, jsonify, session, request
from ..models import Habits, db, User
from flask_login import login_required

habits_routes = Blueprint('habits', __name__)

@habits_routes.route('/')
# @login_required
def get_all_habits():
    """
    query all habits and return them in a list of dictionaries ordered by display order
    """
    habits = Habits.query.filter(Habits.userId == User.id).order_by(Habits.display_order)
    return { 'habits': [habit.to_dict() for habit in habits]}
