from app.models import db, ToDos, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_todos():
    todo1 = ToDos(
        userId = 1, 
        checklist = "deep clean seats:0,wash footwells:0",
        title = "Vacuum Car",
        notes = "",
        difficulty = 3,
        tags = "Vehicles",
        due_date = "2022-12-20",
        completed = False,
        display_order = 1
    )
    db.session.add(todo1)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_todos():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.todos RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM todos")

    db.session.commit()
