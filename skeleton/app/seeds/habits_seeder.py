from app.models import db, Habits, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_habits():
    habit1 = Habits(
        userId = 1,
        title = "10 Min Cleaning",
        notes = "mop floor",
        difficulty = 1,
        tags = "Home",
        reset_counter = "Daily",
        positive_counter = 1,
        negative_counter = 0,
        desired_habit = True,
        undesired_habit = False,
        strong_habit = True,
        display_order = 1
    )
    # demo = User(
    #     username='Demo', email='demo@aa.io', password='password')
    # marnie = User(
    #     username='marnie', email='marnie@aa.io', password='password')
    # bobbie = User(
    #     username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(habit1)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_habits():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.habits RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM habits")

    db.session.commit()
