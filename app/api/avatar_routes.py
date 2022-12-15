from flask import Blueprint, jsonify, session, request, json
from ..models import Avatar, db, User
from ..forms import AddAvatar
from .auth_routes import validation_errors_to_error_messages
from flask_login import login_required, current_user


avatar_routes = Blueprint('avatar', __name__)

@avatar_routes.route('/', methods=['POST'])
@login_required
def get_avatar():
    """
    Querry the avatar information for rendering
    """
    # print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", current_user)
    user = json.loads(request.data.decode('UTF-8'))
    print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", current_user.id)
    avatar = Avatar.query.filter(Avatar.userId == user['id']).first()
    # avatar = Avatar.query.filter(Avatar.userId == User.id).all()
    print("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", type(avatar))
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
@login_required
def update_avatar():
  print("AAAAAAAAAAAAAAAAAAAAAAAAAAAA", request.data.decode('UTF-8'))
  new_avatar = json.loads(request.data.decode('UTF-8'))
  avatar = Avatar.query.filter(Avatar.userId == new_avatar['current_user_id'] ).first()
  # new_avatar = dict(subString.split(':') for subString in request.data.decode('UTF-8').split(','))
  print("CCCCCCCCCCCCCCCCCCCCCCCCCCCCC", avatar)
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

@avatar_routes.route('/add', methods=['POST'])
# @login_required
def add_a_avatar():
  form = AddAvatar()
  print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",form.data)
  # print("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB", form.validate_on_submit())
  form['csrf_token'].data = request.cookies['csrf_token']
  # if form.validate_on_submit():
  new_avatar = Avatar(
    body=form.data['body'],
    skin=form.data['skin'],
    bangs=form.data['bangs'],
    style= form.data['style'],
    facial= form.data['facial'],
    glasses= form.data['glasses'],
    wheelchair= form.data['wheelchair'],
    accent= form.data['accent'],
    animal_ears= form.data['animal_ears'],
    animal_tails= form.data['animal_tails'],
    headband= form.data['headband'],
    background= form.data['background'],
    userId= form.data['userId']
  )
  db.session.add(new_avatar)
  db.session.commit()
  return new_avatar.to_dict()
  # return {'errors':validation_errors_to_error_messages(form.errors)}, 401
