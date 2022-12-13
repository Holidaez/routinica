import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom'
import addDaily from '../../../store/dailies'
import './adddaily.css'
const AddDaily = () => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState('')
    const [repeats, setRepeats] = useState('')
    const [repeatsOn, setRepeatsOn] = useState('') //is this correct???
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [streak, setStreak] = useState('')
    const [due, setDue] = useState('')
    // do users set display order or do we? 
    // const [display_order, setDisplay_order] = useState('')   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            // userId = currentuser.id?
            startDate,
            repeats,
            repeatsOn,
            title,
            notes,
            difficulty,
            streak,
            due
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
                </form>
            </div>
        </section>
    )
}

export default AddDaily;