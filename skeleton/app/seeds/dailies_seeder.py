from app.models import db, Dailies, environment, SCHEMA


# Adds daily tasks
def seed_dailies():


    dailyOne = Dailies(
        userId = 1,
        checklist = "turn on oven:0,slice bread:0,feed kids:0", #space should only be between checklist words
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Make Breakfast",
        notes = "Don't mess up",
        difficulty = 2,
        tags ="winning",
        streak ="0",
        due = True,
        priority = 0
        )


    db.session.add(dailyOne)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_dailies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
