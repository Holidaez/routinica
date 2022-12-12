from flask.cli import AppGroup
from .users import seed_users, undo_users
from .dailies_seeder import seed_dailies, undo_dailies
from .habits_seeder import seed_habits, undo_habits
from .todos_seeder import seed_todos, undo_todos
from .avatar import undo_avatars, seed_avatars
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_dailies()
        undo_habits()
        undo_todos()
        undo_avatars()
    seed_users()
    seed_dailies()
    seed_habits()
    seed_todos()
    seed_avatars()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_dailies()
    undo_habits()
    undo_todos()
    undo_avatars()
    # Add other undo functions here
