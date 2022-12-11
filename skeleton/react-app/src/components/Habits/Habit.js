import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHabits } from '../../store/habits'


function Habit() {
    const dispatch = useDispatch()
    const habit = useSelector(state => state.habits)
    console.log(habit)
    useEffect(() => {
        dispatch(getHabits())
        // console.log('inside dispatch', todo)
    }, [dispatch])
    
    if (!habit || habit === null) {
        return "You have no habits saved"
    };

    return (
        // 
        // <h1>It works!!!!!</h1>
        <div className='tasks-container'>
            {habit.map(hab => (
                <div key={`hab${hab.id}`}>{hab.title}</div>
            ))}
        </div>
    )
}

export default Habit;