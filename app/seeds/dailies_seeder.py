from app.models import db, Dailies, environment, SCHEMA


# Adds daily tasks
def seed_dailies():


    dailyOne = Dailies(
        userId = 1,
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Make Breakfast",
        notes = "Don't mess up",
        difficulty = 2,
        streak = 0,
        due = True,
        display_order = 0
        )

    dailyTwo = Dailies(
        userId = 1,
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Walk Dog",
        notes = "Don't forget treats",
        difficulty = 2,
        streak = 0,
        due = True,
        display_order = 1
        )

    dailyThree = Dailies(
        userId = 1,
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Walk Dog",
        notes = "Don't forget treats",
        difficulty = 2,
        streak = 0,
        due = True,
        display_order = 2
        )

    dailyFour = Dailies(
        userId = 1,
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Journal",
        notes = "",
        difficulty = 2,
        streak = 0,
        due = True,
        display_order = 4
        )
    db.session.add(dailyOne)
    db.session.add(dailyTwo)
    db.session.add(dailyThree)
    db.session.add(dailyFour)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_dailies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dailies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM dailies")

    db.session.commit()
