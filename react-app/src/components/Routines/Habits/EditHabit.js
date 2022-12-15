import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addHabit, editAHabit, deleteHabit, getHabits } from "../../../store/habits";
import { useParams, useHistory } from 'react-router-dom'
import './EditHabit.css'
const EditHabit = ({ onComplete }) => {
    // const habitsLength = useSelector(state => Object.values(state.habits).length)
    const history = useHistory()
    const dispatch = useDispatch()
    const { habitId } = useParams()
    const currentHabit = useSelector(state => state.habits[habitId])
    const [title, setTitle] = useState(currentHabit.title)
    const [notes, setNotes] = useState(currentHabit.notes)
    const [difficulty, setDifficulty] = useState(currentHabit.difficulty)
    const [reset_counter, setReset_counter] = useState(currentHabit.reset_counter)
    const [positive_counter, setPositive_counter] = useState(currentHabit.positive_counter)
    const [negative_counter, setNegative_counter] = useState(currentHabit.negative_counter)
    const [positive_habit, setPositive_habit] = useState(currentHabit.positive_habit)
    const [negative_habit, setNegative_habit] = useState(currentHabit.negative_habit)
    const [strong_habit, setStrong_habit] = useState(currentHabit.strong_habit)
    const [display_order, setDisplay_order] = useState(currentHabit.display_order)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: currentHabit.id,
            userId: currentHabit.userId,
            title,
            notes,
            difficulty,
            reset_counter,
            positive_counter,
            negative_counter,
            positive_habit,
            negative_habit,
            strong_habit,
            display_order
        }
        let createdHabit = await dispatch(editAHabit(payload))
        if (createdHabit.errors) {
            return alert(createdHabit.errors.map(error => error))
        }
        history.push('/main')
    }



    const handleDelete = (e) => {
        e.stopPropagation()
        dispatch(deleteHabit(currentHabit.id))
        history.push('/main')

    }
    const cancel = (e) => {
        e.stopPropagation()
        history.push('/main')

    }
    return (
        <div id='form-container'>
            <form onSubmit={handleSubmit} id='edit-form'>
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
                <div id="orange">
                    <div id="form-nav">
                        <h4 id='edit-habit'>Edit Habit</h4>
                        <div>
                            <button type='button'
                                onClick={cancel} id="cancel-button">Cancel</button>
                            <button type='submit'
                                onSubmit={handleSubmit} id="edit-button">Save Habit</button>
                        </div>
                    </div>
                    <div id="title-label">Title</div>
                    <input
                        id="title"
                        type='text'
                        placeholder='Add a title'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <div id="notes-title">Notes</div>
                    <textarea
                        id="notes"
                        type='text'
                        placeholder='Add notes'
                        value={notes}
                        onChange={e => setNotes(e.target.value)} />

                </div>


                <div id="form-bottom">
                    <div id="dailies-label">Difficulty</div>
                    <select
                        id='difficulty'
                        value={difficulty}
                        onChange={e => setDifficulty(e.target.value)}>
                        <option value={1}>Trivial</option>
                        <option value={2}>Easy</option>
                        <option value={3}>Medium</option>
                        <option value={4}>Hard</option>
                    </select>
                    <div id="dailies-label">Reset Counter</div>
                    <select
                        id='reset_counter'
                        value={reset_counter}
                        onChange={e => setReset_counter(e.target.value)}>
                        <option value={1}>Daily</option>
                        <option value={2}>Weekly</option>
                        <option value={3}>Monthly</option>
                    </select>
                    <button id="delete-button" type='button'
                        onClick={handleDelete}><img src='/svg/garbage.svg' id='garbage'></img>Delete this Habit</button>
                </div>
            </form>
        </div>
    )
}

export default EditHabit;
