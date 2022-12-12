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
    todo2 = ToDos(

        userId = 1, 
        checklist = "go to glasses store:0,buy them:0",
        title = "Pick up new glasses",
        notes = "",
        difficulty = 1,
        tags = "",
        due_date = "2022-12-19",
        completed = False,
        display_order = 2
    )
    todo3 = ToDos(

        userId = 1, 
        checklist = "get in online queue:0,wait until turn to buy:0",
        title = "Order concert tickets",
        notes = "",
        difficulty = 3,
        tags = "Fun",
        due_date = "2022-12-30",
        completed = False,
        display_order = 3
    )
    todo4 = ToDos(

        userId = 1, 
        checklist = "get in car:0,drive to store:0,buy cheese:0",
        title = "Go to cheese store",
        notes = "Research cheeses",
        difficulty = 1,
        tags = "",
        due_date = "2022-12-30",
        completed = False,
        display_order = 4
    )
 
    db.session.add(todo1)
    db.session.add(todo2)
    db.session.add(todo3)
    db.session.add(todo4)
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
