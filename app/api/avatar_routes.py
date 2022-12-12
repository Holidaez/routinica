from flask import Blueprint, jsonify, session, request
from ..models import Avatar, db, User
from flask_login import login_required, current_user


avatar_routes = Blueprint('avatar', __name__)

@avatar_routes.route('/')
# @login_required
def get_avatar():
    """
    Querry the avatar information for rendering
    """
    avatar = Avatar.query.filter(Avatar.userId == User.id).first()
    avatarDict= {
      'id':avatar.id,
      'userId':avatar.userId,
      'body':avatar.body,
      'skin':avatar.skin,
      'bangs':avatar.bangs,
      'style':avatar.style,
      'facial':avatar.facial,
      'glasses':avatar.glasses,
      'wheelchair':avatar.wheelchair,
      'accent':avatar.accent,
      'animal_ears':avatar.animal_ears,
      'animal_tails':avatar.animal_tails,
      'headband':avatar.headband,
      'background':avatar.background
    }
    return {'avatar': avatarDict}
