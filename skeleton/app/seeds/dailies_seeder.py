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
        streak = 0,
        due = True,
        display_order = 0
        )

    dailyTwo = Dailies(
        userId = 1,
        checklist = "put on coat:0,clip on harness:enjoy walk:0", #space should only be between checklist words
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Walk Dog",
        notes = "Don't forget treats",
        difficulty = 2,
        tags ="dog",
        streak = 0,
        due = True,
        display_order = 1
        )

    dailyThree = Dailies(
        userId = 1,
        checklist = "put on coat:0,clip on harness:1,enjoy walk:0", #space should only be between checklist words
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Walk Dog",
        notes = "Don't forget treats",
        difficulty = 2,
        tags ="dog",
        streak = 0,
        due = True,
        display_order = 2
        )

    dailyThree = Dailies(
        userId = 1,
        checklist = "open Calm app:0,take a deep breath:0", #space should only be between checklist words
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Meditate",
        notes = "",
        difficulty = 2,
        tags ="self-help",
        streak = 0,
        due = True,
        display_order = 3
        )

    dailyFour = Dailies(
        userId = 1,
        checklist = "open notebook:0,reflect:0,write:0", #space should only be between checklist words
        start_date = "2022-12-19",
        repeats = "Weekly",
        repeats_on = "Sun, Mon, Tue, Wed, Thur, Fri, Sat",
        title = "Journal",
        notes = "",
        difficulty = 2,
        tags ="self-help",
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
        positive_habit = True,
        negative_habit = False,
        strong_habit = True,
        display_order = 1
    )
    habit2 = Habits(
        userId = 1,
        title = "Play piano",
        notes = "",
        difficulty = 1,
        tags = "self-improvement",
        reset_counter = "Daily",
        positive_counter = 1,
        negative_counter = 0,
        positive_habit = True,
        negative_habit = False,
        strong_habit = False,
        display_order = 2
    )
    habit3 = Habits(
        userId = 1,
        title = "Meal Prep",
        notes = "make a healthy lunch on Sunday nights",
        difficulty = 1,
        tags = "self-improvement",
        reset_counter = "Weekly",
        positive_counter = 1,
        negative_counter = 0,
        positive_habit = True,
        negative_habit = False,
        strong_habit = True,
        display_order = 3
    )
    habit4 = Habits(
        userId = 1,
        title = "Limit Video Game Time",
        notes = "40 minutes of game time a night",
        difficulty = 2,
        tags = "self-improvement",
        reset_counter = "Daily",
        positive_counter = 1,
        negative_counter = 0,
        positive_habit = True,
        negative_habit = False,
        strong_habit = True,
        display_order = 4
    )
    db.session.add(habit1)
    db.session.add(habit2)
    db.session.add(habit3)
    db.session.add(habit4)
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
