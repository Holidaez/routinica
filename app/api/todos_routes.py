from flask import Blueprint, jsonify, session, request
from ..models import ToDos, db, User
from ..forms import AddEditToDo
from flask_login import login_required
from .auth_routes import validation_errors_to_error_messages
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

@todos_routes.route('/add', methods=['POST'])
@login_required
def add_a_todo():
    """
    add a todo and return them in a list of dictionaries
    """
    form = AddEditToDo()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_todo = ToDos(
            userId = form.data['userId'],
            title = form.data['title'],
            notes = form.data['notes'],
            difficulty = form.data['difficulty'],
            due_date = form.data['due_date'],
            completed = form.data['completed'],
            display_order = form.data['display_order']
        )
        db.session.add(new_todo)
        db.session.commit()
        return new_todo.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401