import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addHabit } from "../../../store/habits";
const AddHabit = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const habitsLength = useSelector(state => Object.values(state.habits))
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [reset_counter, setReset_counter] = useState('Daily')
    const [positive_counter, setPositive_counter] = useState(0)
    const [negative_counter, setNegative_counter] = useState(0)
    const [positive_habit, setPositive_habit] = useState(false)
    const [negative_habit, setNegative_habit] = useState(false)
    const [strong_habit, setStrong_habit] = useState(false)
    const [display_order, setDisplay_order] = useState(habitsLength)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userId,
            title,
            notes,
            difficulty,
            reset_counter,
            positive_counter,
            negative_counter,
            positive_habit,
            negative_habit,
            strong_habit,
            display_order: 15
        }
        let createdHabit = await dispatch(addHabit(payload))
        if (createdHabit) console.log(createdHabit)
        const cancel = () => {

        }
        const handleDelete = async () => {
            
        }
    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <button type='button'
                    className='positive-habit-button'
                    value={positive_habit}
                    onChange={e => setPositive_habit(e.target.value)}
                />
                <button type='button'
                    className='negative-habit-button'
                    value={negative_habit}
                    onChange={e => setNegative_habit(e.target.value)}
                />
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
                <select
                    id='difficulty'
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}>
                    <option value={1}>Trivial</option>
                    <option value={2}>Easy</option>
                    <option value={3}>Medium</option>
                    <option value={4}>Hard</option>
                </select>
                <select
                    id='reset_counter'
                    value={reset_counter}
                    onChange={e => setReset_counter(e.target.value)}>
                    <option value={1}>Daily</option>
                    <option value={2}>Weekly</option>
                    <option value={3}>Monthly</option>
                </select>
                <button type='submit'
                    onSubmit={handleSubmit}>Create new Habit</button>
                {/* <button type='button'
                    onClick={cancel}>Cancel</button> */}
                {/* <button type='button'
                    onClick={handleDelete}>Delete this Habit</button> */}
            </form>
        </section>
    )
}


export default AddHabit;