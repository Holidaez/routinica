import React from "react";
import Daily from "./Dailies/Daily";
import ToDo from "./ToDos/ToDos";
import Habit from "./Habits/Habit";
import { useHistory } from "react-router-dom";
import './routines.css'
import AddDaily from "./Dailies/AddDaily";

export default function Routines() {
    const history = useHistory()
    const redirectToEditAvatar = () => {
        let path = '/edit/avatar'
        history.push(path)
    }
    return(
        <div>
        <button onClick={redirectToEditAvatar}>Edit Avatar</button>
        <div className="body-container">
            <Habit />
            <Daily />
            <ToDo />
            <AddDaily />
        </div>
        </div>
    )
}
