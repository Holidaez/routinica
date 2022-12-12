import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHabits } from '../../../store/habits'
import './habits.css'
import '../routines.css'
//TODO:
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.
//Add a css file and basic styling (conditional class rendering for colors of buttons depending on )


function Habit() {
    const dispatch = useDispatch()
    const currentHabitList = useSelector(state => {
        return Object.values(state.habits)
    })
    // console.log(currentHabitList)
    useEffect(() => {
        dispatch(getHabits())
    }, [dispatch])


    return (
        <div className='routines-container'>
            <input className='add-routine' placeholder='Add a Habit' />
            {currentHabitList.map(habit => {
                return (
                    <div key={`hab-${habit.id}`} className='habit-card'>
                        <div className='habit-plus-minus'>
                            <button className='habit-plus-button'>+</button>
                        </div>
                        <div className='habit-info-container'><div className='habit-title'>{habit.title}</div>
                        {habit.notes && (
                            <div className='habit-notes'>{habit.notes}</div>
                        )}</div>
                        {habit.positive_counter && (
                            <div className='positive-counter'>+{habit.positive_counter}</div>
                        )}
                        {habit.negative_counter && (
                            <div className='negative-counter'>-{habit.negative_counter}</div>
                        )}
                        <div className='habit-plus-minus'>
                            <button className='habit-minus-button'>-</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Habit;
