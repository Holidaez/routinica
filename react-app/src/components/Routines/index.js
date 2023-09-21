import React, { useContext, useEffect } from "react";
import Daily from "./Dailies/Daily";
import ToDo from "./ToDos/ToDos";
import Habit from "./Habits/Habit";
import Avatar from "./Avatar/avatar";
import { useHistory } from "react-router-dom";
import { getDailies, addDaily } from '../../store/dailies'
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../context/Theme";

import './routines.css'
//render here
export default function Routines() {
    const darkMode = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkMode ? '#333' : '#edecee',
        color: darkMode ? 'white' : '#333'
    }
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    // useEffect(() => {
    //     dispatch(getDailies())
    // },[user])
    const redirectToEditAvatar = () => {
        let path = '/edit/avatar'
        history.push(path)
    }
    const redirectToLogout = () => {
        let path = '/logout'
        history.push(path)
    }
    return (
        <div style={themeStyles}>
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
            <div className="body-container" style={themeStyles}>
                <Habit />
                <Daily />
                <ToDo />
            </div>
            <div id="footer-container">

            <div id="footer-information">
                <div id="erin-links">
                <a href={"https://github.com/eomcikus"} target="_blank"><img src="erin_avatar.png" id="dev-img" ></img></a>
                <a href={"https://www.linkedin.com/in/erin-duffy-omcikus-5641004a/"} target="_blank" id="dev-names">Erin</a>
                </div>
                <div id="dave-links">
                    <a href="https://github.com/davesextonjr" target="_blank"><img src="/dave_avatar.png" id="dev-img"></img></a>
                    <a href={"https://www.linkedin.com/in/dave-sexton-jr/"} target="_blank" id="dev-names">Dave</a>
                </div>
                <div id="dev-links-p-container">
                <div id="dev-links-p">Dev Links</div>
                <div id="dev-links-p">Pictures are GitHub Links</div>
                <div id="dev-links-p">Names are Linkedin Links</div>
                </div>
                <div id="keegan-links">
                    <a href="https://github.com/Holidaez" target="_blank"><img src="keegan_avatar.png" id="dev-img"></img></a>
                    <a href="https://www.linkedin.com/in/keegan-abley-a12099162/" target="_blank" id="dev-names">Keegan</a>
                </div>
                <div id="brian-links">
                    <a href="https://github.com/AppBK" target="_blank"><img src="/brian_avatar.png" id="dev-img"></img></a>
                    <a href="https://www.linkedin.com/in/brian-kiesel-94475696/" target="_blank" id="dev-names">Brian</a>
                </div>
            </div>
            </div>
        </div>
    )
}
