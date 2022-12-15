import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addHabit, editAHabit, deleteHabit } from "../../../store/habits";
import { useParams, useHistory } from 'react-router-dom'

const EditHabit = ({onComplete}) => {

    // const habitsLength = useSelector(state => Object.values(state.habits).length)
    const history = useHistory()
    const dispatch = useDispatch()
    const { habitId } = useParams() 
    console.log('habit id', habitId)
    const currentHabit = useSelector(state => state.habits[habitId])
    console.log(currentHabit)
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
        if (createdHabit){
            history.push('/main')
            onComplete(false)
        }
        
    }
    const handleDelete = (e) => {
        e.stopPropagation()
        dispatch(deleteHabit(currentHabit.id))
        history.push('/main')
        onComplete(false)
    }
    const cancel = (e) => {
        e.stopPropagation()
        history.push('main')
        onComplete(false)
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
                    required
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
                    onSubmit={handleSubmit}>Update new Habit</button>
                <button type='button'
                    onClick={cancel}>Cancel</button> 
                <button type='button'
                    onClick={handleDelete}>Delete this Habit</button>
            </form>
        </section>
    )
}

export default EditHabit;