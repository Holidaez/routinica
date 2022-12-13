import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addToDos } from '../../../store/todos';

function AddToDo() {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.session.user.id)
    const todosLength = useSelector(state => Object.values(state.todos).length)
    const currentDate = new Date().toJSON().slice(0, 10)
    const [title, setTitle] = useState('Add a title')
    const [notes, setNotes] = useState('Add notes')
    const [difficulty, setDifficulty] = useState(1)
    const [due_date, setDue_date] = useState(currentDate)
    const [completed, setCompleted] = useState(true)
    const [display_order, setDisplay_order] = useState(todosLength)

    const handleSubmit = async (e) => {
        console.log('here')
        e.preventDefault()
        const payload = {
            userId,
            title,
            notes,
            difficulty,
            due_date,
            completed,
            display_order: todosLength + 1
        }
        console.log('payload', payload)
        let createdToDo = await dispatch(addToDos(payload))
        if (createdToDo) console.log(createdToDo)
    }
    const handleDelete = async () => {

    }
    const cancel = async () => {

    }
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                <input
                    type='text'
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
                <input
                    type='date'
                    min={currentDate}
                    value={due_date}
                    onChange={e => setDue_date(e.target.value)} />
                <input
                    type='text'
                    value={completed}
                    onChange={e => setCompleted(e.target.value)} />
                <button type='submit'
                    onSubmit={handleSubmit}>Create new ToDo</button>
                <button type='button'
                    onClick={cancel}>Cancel</button>
                <button type='button'
                    onClick={handleDelete}>Delete this ToDo</button>
            </form>
        </section>
    )

}
export default AddToDo