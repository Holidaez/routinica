import React from "react";
import Daily from "./Dailies/Daily";
import ToDo from "./ToDos/ToDos";
import Habit from "./Habits/Habit";
import './routines.css'

export default function Routines() {
    return(
        <div className="body-container">
            <Habit />
            <Daily />
            <ToDo />
        </div>
    )
}
