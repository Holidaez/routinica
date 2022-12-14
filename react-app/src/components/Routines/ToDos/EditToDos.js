import './edittodo.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { addToDos } from '../../../store/todos';

function EditToDoForm({onComplete, currentToDoId}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
    const currentToDo = useSelector(state => state.todos[currentToDoId])
    const todosLength = useSelector(state => Object.values(state.todos).length)
    const currentDate = new Date().toJSON().slice(0, 10)
    const [title, setTitle] = useState(currentToDo.title)
    const [notes, setNotes] = useState(currentToDo.notes)
    const [difficulty, setDifficulty] = useState(currentToDo.difficulty)
    const [due_date, setDue_date] = useState(currentToDo.due_date)
    const [completed, setCompleted] = useState(currentToDo.completed)
    const [display_order, setDisplay_order] = useState(currentToDo.display_order)

    const handleSubmit = async (e) => {
        console.log('here')
        e.preventDefault()
        const payload = {
            id: currentToDo.id,
            userId: currentToDo.userId,
            title,
            notes,
            difficulty,
            due_date,
            completed,
            display_order
        }
        console.log('payload', payload)
        onComplete()
        // let createdToDo = await dispatch(addToDos(payload))
        // if (createdToDo) console.log(createdToDo)
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
                    onSubmit={handleSubmit}>Edit new ToDo</button>
                <button type='button'
                    onClick={cancel}>Cancel</button>
                <button type='button'
                    onClick={handleDelete}>Delete this ToDo</button>
            </form>
        </section>
    )

}
export default EditToDoForm
