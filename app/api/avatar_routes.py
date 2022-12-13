from flask import Blueprint, jsonify, session, request, json
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

@avatar_routes.route('/update', methods=["PUT"])
# @login_required
def update_avatar():
  print("AAAAAAAAAAAAAAAAAAAAAAAAAAAA", request.data.decode('UTF-8'))
  avatar = Avatar.query.filter(Avatar.userId == User.id).first()
  # new_avatar = dict(subString.split(':') for subString in request.data.decode('UTF-8').split(','))
  new_avatar = json.loads(request.data.decode('UTF-8'))
  print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCC", new_avatar['body'])
  avatar.body = new_avatar['body']
  avatar.skin = new_avatar['skin']
  avatar.bangs = new_avatar['bangs']
  avatar.style = new_avatar['style']
  avatar.facial = new_avatar['facial']
  avatar.glasses = new_avatar['glasses']
  avatar.wheelchair = new_avatar['wheelchair']
  avatar.accent = new_avatar['accent']
  avatar.animal_ears = new_avatar['animal_ears']
  avatar.animal_tails = new_avatar['animal_tails']
  avatar.headband = new_avatar['headband']
  avatar.background = new_avatar['background']
  db.session.commit()
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
