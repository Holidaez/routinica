from flask import Blueprint, jsonify, session, json, request
from ..models import Dailies, db, User
from ..forms import AddEditDaily
from .auth_routes import validation_errors_to_error_messages
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
# @login_required
def add_edit_a_daily():
    form = AddEditDaily()
    form['csrf_token'].data = request.cookies['csrf_token']
    print("ADD DAILY FORM !!!!!!!!!!!!!!!!", form.data)
    if form.validate_on_submit():
        new_daily = Dailies(
            userId = form.data['userId'],
            start_date = form.data['start_date'],
            repeats = form.data['repeats'],
            repeats_on = form.data['repeats_on'],
            title = form.data['title'],
            notes = form.data['notes'],
            difficulty = form.data['difficulty'],
            streak = form.data['streak'],
            due = form.data['due'],
            display_order = form.data['display_order']
        )
        db.session.add(new_daily)
        db.session.commit()
        return new_daily.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# @dailies_routes.route('/update', methods=['PUT'])
# @login_required
# def edit_daily():
#     pass

@dailies_routes.route('/edit', methods=['PUT'])
@login_required
def edit_daily():
    edited_daily = json.loads(request.data.decode('UTF-8'))
    daily = Dailies.query.get(edited_daily['id'])
    daily.userId = edited_daily['userId']
    daily.start_date = edited_daily['start_date']
    daily.repeats = edited_daily['repeats']
    daily.repeats_on = edited_daily['repeats_on']
    daily.title = edited_daily['title']
    daily.notes = edited_daily['notes']
    daily.difficulty = edited_daily['difficulty']
    daily.streak = edited_daily['streak']
    daily.due = edited_daily['due']
    daily.display_order = edited_daily['display_order']
    db.session.commit()
    dailyDict = {
        'id': daily.id,
        'userId': daily.userId,
        'start_date': daily.start_date,
        'repeats': daily.repeats,
        'repeats_on': daily.repeats_on,
        'title': daily.title,
        'notes': daily.notes,
        'difficulty': daily.difficulty,
        'streak': daily.streak,
        'due': daily.due,
        'display_order': daily.display_order
        }
    return dailyDict

@dailies_routes.route('/<id>', methods=['DELETE'])
@login_required
def delete_daily(id):
    todelete = Dailies.query.get(id)
    db.session.delete(todelete)
    db.session.commit()
    return {"deleteMessage": 'Daily successfully deleted.'}
