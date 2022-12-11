import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHabits } from '../../store/habits'

//TODO:
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.
//Add a css file and basic styling


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
            <div className='add-routine'>Add a Habit</div>
            {currentHabitList.map( habit => {
                return (
                    <div key={`hab-${habit.id}`} className='habit-card'>
                        <div className='habit-plus-minus'>
                            <button>+</button>
                        </div>
                        <div>{habit.title}</div>
                        {habit.notes && (
                            <div>{habit.notes}</div>
                        )}
                        {habit.positive_counter && (
                            <div>+{habit.positive_counter}</div>
                        )}
                        {habit.negative_counter && (
                            <div>-{habit.negative_counter}</div>
                        )}
                        <div className='habit-plus-minus'>
                            <button>-</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Habit;
