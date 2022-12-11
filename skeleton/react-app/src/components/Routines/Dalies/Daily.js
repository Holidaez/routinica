import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDalies } from '../../../store/dailies'

//TODO:
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.
//Add a css file and basic styling


function Daily() {
    const dispatch = useDispatch()
    const currentDailiesList = useSelector(state => {
        return Object.values(state.dailies)
    })
    // console.log(currentHabitList)
    useEffect(() => {
        dispatch(getDalies())
    }, [dispatch])


    return (
        <div className='routines-container'>
            <div className='add-routine'>Add a Daily</div>
            {currentDailiesList.map( daily => {
                return (
                    <div key={`day-${daily.id}`} className='daily-card'>
                        <div className='checkbox'>
                            <button>Done?</button>
                        </div>
                        <div>{daily.title}</div>
                        {daily.notes && (
                            <div>{daily.notes}</div>
                        )}
                        {daily.checklist && (
                            <div>{daily.checklist}</div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Daily;
