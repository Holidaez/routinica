from flask import Blueprint, jsonify, session, request
from ..models import ToDos, db, User
from flask_login import login_required

todos_routes = Blueprint('todos', __name__)
## figure out how we get into logged in userId

@todos_routes.route('/')
# @login_required
def get_all_todos():
    """
    query all todos and return them in a list of dictionaries ordered by display order 
    """
    todos = ToDos.query.filter(ToDos.userId == User.id).order_by(ToDos.display_order)
    return { 'todos': [todo.to_dict() for todo in todos ]}

