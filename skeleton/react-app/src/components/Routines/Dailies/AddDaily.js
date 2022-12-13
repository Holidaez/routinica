import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom'
import { addDaily } from "../../../store/dailies";
import './adddaily.css'

//TODO - add checklist



const AddDaily = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const dailiesLength = useSelector(state => Object.values(state.dailies).length)
    const currentDate = new Date().toJSON().slice(0,10)
    const [startDate, setStartDate] = useState(currentDate)
    const [repeats, setRepeats] = useState('weekly')
    const [repeatsOn, setRepeatsOn] = useState(1) //is this correct???
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState(2)
    const [streak, setStreak] = useState(1)
    const [due, setDue] = useState(false)
    const [displayOrder, setDisplayOrder] = useState(dailiesLength)
    const handleSubmit = async (e) => {
        e.preventDefault()
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
            displayOrder:dailiesLength + 1
            //TODO: remember to render CSRF token on backend!
        }
        let createdDaily = await dispatch(addDaily(payload))
        if (createdDaily) console.log(createdDaily)
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
                        placeholder='Add a title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <input
                        type='text'
                        placeholder='Add notes'
                        value={notes}
                        onChange={e => setNotes(e.target.value)} />
                        </div>
                    <input
                        type='date'
                        min={currentDate}
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)} />
                    <select
                        id='repeats'
                        value={repeats}
                        onChange={e => setRepeats(e.target.value)}>
                            <option value={'daily'}>Daily</option>
                            <option value={'weekly'}>Weekly</option>
                            <option value={'monthly'}>Monthly</option>
                            <option value={'yearly'}>Yearly</option>

                    </select>
                    {repeats === 'daily' && (
                        <div>

                        <input
                            placeholder="Choose how often this repeats"
                            type='text'
                            value={repeatsOn}
                            onChange={e => setRepeatsOn(e.target.value)}/>
                        <div className="repeats-label">Day</div>
                        </div>
                    )}
                    {repeats === 'weekly' && (
                          <div>
                            <input
                            placeholder="Choose how often this repeats"
                            type='text'
                            value={repeatsOn}
                            onChange={e => setRepeatsOn(e.target.value)}/>
                            <div className="repeats-label">Week</div>
                        </div>
                    )}
                    {repeats === 'monthly' && (
                          <div>
                            <input
                            placeholder="Choose how often this repeats"
                            type='text'
                            value={repeatsOn}
                            onChange={e => setRepeatsOn(e.target.value)}/>
                            <div className="repeats-label">Month</div>
                        </div>
                    )}
                    {repeats === 'yearly' && (
                          <div>
                            <input
                            placeholder="Choose how often this repeats"
                            type='text'
                            value={repeatsOn}
                            onChange={e => setRepeatsOn(e.target.value)}/>
                            <div className="repeats-label">Year</div>
                        </div>
                    )}


                    <select
                        id='difficulty'
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}>
                            <option value={1}>Trivial</option>
                            <option value={2}>Easy</option>
                            <option value={3}>Medium</option>
                            <option value={4}>Hard</option>

                    </select>
                    <input
                        type='text'
                        placeholder='Streak'
                        value={streak}
                        onChange={e => setStreak(e.target.value)} />

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
