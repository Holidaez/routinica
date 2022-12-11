from flask import Blueprint, jsonify, session, request
from ..models import Dailies, db, User
from flask_login import login_required

dailies_routes = Blueprint('dailies', __name__)

@dailies_routes.route('/')
# @login_required
def get_all_dailies():
    """
    Querry all dailies and return them in a list of dictionaries ordered by display order
    """
    dalies = Dailies.query.filter(Dailies.userId == User.id).order_by(Dailies.display_order)
    return {'dailies': [daily.to_dict() for daily in dalies]}
