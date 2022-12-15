"""empty message

Revision ID: a8eb66d383e1
Revises:
Create Date: 2022-12-12 16:04:37.578658

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'a8eb66d383e1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('gold', sa.Integer(), nullable=False),
    sa.Column('experience', sa.Integer(), nullable=False),
    sa.Column('level', sa.Integer(), nullable=False),
    sa.Column('health', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.String(length=32), nullable=False),
    sa.Column('login_date', sa.String(length=64), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")

    op.create_table('avatar',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('body', sa.String(length=256), nullable=False),
    sa.Column('skin', sa.String(length=256), nullable=False),
    sa.Column('bangs', sa.String(length=256), nullable=False),
    sa.Column('style', sa.String(length=256), nullable=True),
    sa.Column('facial', sa.String(length=256), nullable=True),
    sa.Column('glasses', sa.String(length=256), nullable=True),
    sa.Column('wheelchair', sa.String(length=256), nullable=True),
    sa.Column('accent', sa.String(length=256), nullable=True),
    sa.Column('animal_ears', sa.String(length=256), nullable=True),
    sa.Column('animal_tails', sa.String(length=256), nullable=True),
    sa.Column('headband', sa.String(length=256), nullable=True),
    sa.Column('background', sa.String(length=256), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE avatar SET SCHEMA {SCHEMA};")

    op.create_table('dailies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('start_date', sa.String(length=64), nullable=False),
    sa.Column('repeats', sa.String(length=64), nullable=False),
    sa.Column('repeats_on', sa.String(256)),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=250), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('streak', sa.Integer(), nullable=False),
    sa.Column('due', sa.Boolean()),
    sa.Column('display_order', sa.Integer()),
    sa.ForeignKeyConstraint(['userId'], ['users.id'] ),
    sa.PrimaryKeyConstraint('id'),
    )

    if environment == "production":
        op.execute(f"ALTER TABLE dailies SET SCHEMA {SCHEMA};")

    op.create_table('habits',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=2048), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('reset_counter', sa.String(length=64), nullable=False),
    sa.Column('positive_counter', sa.Integer(), nullable=False),
    sa.Column('negative_counter', sa.Integer(), nullable=False),
    sa.Column('positive_habit', sa.Boolean()),
    sa.Column('negative_habit', sa.Boolean()),
    sa.Column('strong_habit', sa.Boolean()),
    sa.Column('display_order', sa.Integer()),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    )

    if environment == "production":
        op.execute(f"ALTER TABLE habits SET SCHEMA {SCHEMA};")

    op.create_table('tags',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE tags SET SCHEMA {SCHEMA};")

    op.create_table('todos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=2048), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('due_date', sa.String(length=64), nullable=False),
    sa.Column('completed', sa.Boolean()),
    sa.Column('display_order', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE todos SET SCHEMA {SCHEMA};")

    op.create_table('dailies_checklist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('checked', sa.Boolean()),
    sa.Column('dailiesId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['dailiesId'], ['dailies.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE dailies_checklist SET SCHEMA {SCHEMA};")

    op.create_table('daily_tags',
    sa.Column('daily_id', sa.Integer(), nullable=False),
    sa.Column('tags', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['daily_id'], ['dailies.id'], ),
    sa.ForeignKeyConstraint(['tags'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('daily_id', 'tags')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE daily_tags SET SCHEMA {SCHEMA};")

    op.create_table('habits_tags',
    sa.Column('habits_id', sa.Integer(), nullable=False),
    sa.Column('tags', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['habits_id'], ['habits.id'], ),
    sa.ForeignKeyConstraint(['tags'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('habits_id', 'tags')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE habits_tags SET SCHEMA {SCHEMA};")

    op.create_table('todos_checklist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('checked', sa.Boolean()),
    sa.Column('todosId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['todosId'], ['todos.id'], ),
    sa.PrimaryKeyConstraint('id')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE todos_checklist SET SCHEMA {SCHEMA};")

    op.create_table('todos_tags',
    sa.Column('todos_id', sa.Integer(), nullable=False),
    sa.Column('tags', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['tags'], ['tags.id'], ),
    sa.ForeignKeyConstraint(['todos_id'], ['todos.id'], ),
    sa.PrimaryKeyConstraint('todos_id', 'tags')
    )

    if environment == "production":
        op.execute(f"ALTER TABLE todos_tags SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('todos_tags')
    op.drop_table('todos_checklist')
    op.drop_table('habits_tags')
    op.drop_table('daily_tags')
    op.drop_table('dailies_checklist')
    op.drop_table('todos')
    op.drop_table('tags')
    op.drop_table('habits')
    op.drop_table('dailies')
    op.drop_table('avatar')
    op.drop_table('users')
    # ### end Alembic commands ###
