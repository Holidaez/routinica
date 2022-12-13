import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom'
import addDaily from '../../../store/dailies'
import './adddaily.css'
const AddDaily = () => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState('')
    const [repeats, setRepeats] = useState(false)
    const [repeatsOn, setRepeatsOn] = useState('') //is this correct???
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState(0)
    const [streak, setStreak] = useState(0)
    const [due, setDue] = useState(false)
    const [displayOrder, setDisplayOrder] = useState(0)   
    const handleSubmit = async (e) => {
        e.preventDefault()
        //get user from state
        //enter default values in useState
        const payload = {
            userId, 
            startDate,
            repeats,
            repeatsOn,
            title,
            notes,
            difficulty,
            streak,
            due,
            displayOrder
            //TODO: remember to render CSRF token on backend!
        }
        let createdDaily = await dispatch(addDaily(payload))
        if (createdDaily) {
            return <Redirect to='/main' />
        }
    }
    const cancel = () => {

    }
    return (
        <section>
            <div className='add-daily-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='color-container'>
                    <input
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Notes'
                        value={notes}
                        onChange={e => setNotes(e.target.value)} />
                        </div>
                    <input
                        type='text'
                        placeholder='Start Date'
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Repeats?'
                        value={repeats}
                        onChange={e => setRepeats(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Select days to repeat'
                        value={repeatsOn}
                        onChange={e => setRepeatsOn(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Difficulty'
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Streak'
                        value={streak}
                        onChange={e => setStreak(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Due Date'
                        value={due}
                        onChange={e => setDue(e.target.value)} />
                    <button type='submit'
                        onSubmit={handleSubmit}>Create new Daily</button>
                    <button type='button'
                        onClick={cancel}>Cancel</button>
                    <button type='button'>Delete this Daily</button>
                </form>
            </div>
        </section>
    )
}

export default AddDaily;