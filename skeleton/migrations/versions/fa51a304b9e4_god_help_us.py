"""god help us

Revision ID: fa51a304b9e4
Revises: 
Create Date: 2022-12-10 10:14:44.665265

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa51a304b9e4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
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
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('dailies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('checklist', sa.String(length=250), nullable=True),
    sa.Column('start_date', sa.String(length=64), nullable=False),
    sa.Column('repeats', sa.String(length=64), nullable=False),
    sa.Column('repeats_on', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=250), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('tags', sa.String(length=250), nullable=True),
    sa.Column('streak', sa.Integer(), nullable=False),
    sa.Column('due', sa.Boolean(), nullable=False),
    sa.Column('display_order', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('display_order')
    )
    op.create_table('habits',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=2048), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('tags', sa.String(length=250), nullable=True),
    sa.Column('reset_counter', sa.String(length=64), nullable=False),
    sa.Column('positive_counter', sa.Integer(), nullable=False),
    sa.Column('negative_counter', sa.Integer(), nullable=False),
    sa.Column('positive_habit', sa.Boolean(), nullable=False),
    sa.Column('negative_habit', sa.Boolean(), nullable=False),
    sa.Column('strong_habit', sa.Boolean(), nullable=False),
    sa.Column('display_order', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('display_order')
    )
    op.create_table('todos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('checklist', sa.String(length=250), nullable=True),
    sa.Column('title', sa.String(length=64), nullable=False),
    sa.Column('notes', sa.String(length=2048), nullable=True),
    sa.Column('difficulty', sa.Integer(), nullable=False),
    sa.Column('tags', sa.String(length=250), nullable=True),
    sa.Column('due_date', sa.String(length=64), nullable=False),
    sa.Column('completed', sa.Boolean(), nullable=False),
    sa.Column('display_order', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('display_order')
    )
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
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('users')
    op.drop_table('todos')
    op.drop_table('habits')
    op.drop_table('dailies')
    op.drop_table('avatar')
    # ### end Alembic commands ###
