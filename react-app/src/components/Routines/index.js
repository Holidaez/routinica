import React from "react";
import Daily from "./Dailies/Daily";
import ToDo from "./ToDos/ToDos";
import Habit from "./Habits/Habit";
import Avatar from "./Avatar/avatar";
import { useHistory } from "react-router-dom";
import './routines.css'
import { useSelector } from "react-redux";

//render here
export default function Routines() {
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const redirectToEditAvatar = () => {
        let path = '/edit/avatar'
        history.push(path)
    }
    const redirectToLogout = () => {
        let path = '/logout'
        history.push(path)
    }
    return (
        <div>
            <div id="header-container">

                <div id="avatar-block-container">
                    <Avatar />
                    <div id="vitals">
                    <div id='user-info'>
                        <img src="/svg/sword.svg" id="sword-img"/>
                    {user.username} • Level: {user.level} Warrior
                    </div>
                        <div id="health"></div>
                            <img id="health-heart" src="/svg/jewel_heart.svg"/><progress id="health-bar" max="50" value={user.health}></progress>
                        <div id="exp"></div>
                            <img id="jewel-star" src="/svg/jewel_star.svg"/><progress id="experience-bar" max="100" value='80'></progress>
                    </div>
                </div>
                <div id="button-container">
                    <button className="user-buttons" onClick={redirectToEditAvatar}>Edit Avatar</button>
                    <button className="user-buttons" onClick={redirectToLogout}>Logout</button>
                </div>
            </div>
            <div className="body-container">
                <Habit />
                <Daily />
                <ToDo />
            </div>
        </div>
    )
}
