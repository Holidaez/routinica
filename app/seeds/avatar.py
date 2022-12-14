from app.models import db, Avatar, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_avatars():
    demoAvatar = Avatar(
        userId=1, background="/avatar/backgrounds/background_purple.png",body="/avatar/body/black/broad_shirt_black.png",skin="/avatar/skin/skin_f5a76e.png",bangs="/avatar/hair/color/blond/hair_bangs_4_blond.png",glasses="/avatar/extra/glasses/eyewear_special_redTopFrame.png",wheelchair="/avatar/extra/wheelchair/button_chair_yellow.png")
    marnieAvatar = Avatar(
        userId=2, background="/avatar/backgrounds/background_purple.png",body="/avatar/body/black/broad_shirt_black.png",skin="/avatar/skin/skin_f5a76e.png",bangs="/avatar/hair/color/blond/hair_bangs_4_blond.png",glasses="/avatar/extra/glasses/eyewear_special_redTopFrame.png")
    bobbieAvatar = Avatar(
        userId=3, background="/avatar/backgrounds/background_purple.png",body="/avatar/body/black/broad_shirt_black.png",skin="/avatar/skin/skin_f5a76e.png",bangs="/avatar/hair/color/blond/hair_bangs_4_blond.png")
    db.session.add(demoAvatar)
    db.session.add(marnieAvatar)
    db.session.add(bobbieAvatar)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_avatars():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.avatar RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM avatar")

    db.session.commit()
