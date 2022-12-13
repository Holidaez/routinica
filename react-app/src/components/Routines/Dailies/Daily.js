import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDailies, setCurrentDaily } from '../../../store/dailies'
import '../routines.css'
import './daily.css'
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
        dispatch(getDailies())
    }, [dispatch])


    return (
        <div className='routines-container'>
            {/* <div className='dailies-title'>Dailies</div> */}
            <input className='add-routine' placeholder='Add a Daily' />
            {currentDailiesList.map( daily => {
                return (
                    <div onClick = {() => setCurrentDaily(daily.id)} key={`day-${daily.id}`} className='daily-card'>
                        <div className='dailies-checkbox-div'>
                            <button className='daily-checkbox' />
                        </div>
                        <div className='daily-info-container'>
                        <div className='daily-card-title'>{daily.title}</div>
                        {daily.notes && (
                            <div className='daily-card-notes'>{daily.notes}</div>
                        )}
                        {daily.checklist && (
                            <div className='daily-card-checklist'>{daily.checklist}</div>
                        )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Daily;
