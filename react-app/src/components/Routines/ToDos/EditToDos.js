import './edittodo.css'

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addToDos, editAToDo, deleteToDo } from '../../../store/todos';

function EditToDoForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { toDoId } = useParams()
    const userId = useSelector(state => state.session.user.id)
    const currentToDo = useSelector(state => state.todos[toDoId])
    const todosLength = useSelector(state => Object.values(state.todos).length)
    const currentDate = new Date().toJSON().slice(0, 10)
    const [title, setTitle] = useState(currentToDo.title)
    const [notes, setNotes] = useState(currentToDo.notes)
    const [difficulty, setDifficulty] = useState(currentToDo.difficulty)
    const [due_date, setDue_date] = useState(currentToDo.due_date)
    const [completed, setCompleted] = useState(currentToDo.completed)
    const [display_order, setDisplay_order] = useState(currentToDo.display_order)

    const handleSubmit = async (e) => {
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
        let createdToDo = await dispatch(editAToDo(payload))
        if (createdToDo.errors) {
            return alert(createdToDo.errors.map(error => error))
            }

            history.push('/main')

        }

    const handleDelete = async () => {
        dispatch(deleteToDo(currentToDo.id))
        history.push('/main')

    }
    const cancel = async () => {
        history.push('/main')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} id='edit-form'>
                <div id='orange'>
                    <div id="form-nav">
                        <h4 id='edit-habit'>Edit Todo</h4>
                        <div>
                            <button type='button'
                                onClick={cancel} id="cancel-button">Cancel</button>
                            <button type='submit'
                                onSubmit={handleSubmit} id="edit-button">Save Todo</button>

                        </div>
                    </div>
                    <div id="title-label">Title</div>
                    <input
                        id="title"
                        type='text'
                        value={title}
                        onChange={e => setTitle(e.target.value)} />
                    <div id="notes-title">Notes</div>
                    <textarea
                        id="notes"
                        type='text'
                        value={notes}
                        onChange={e => setNotes(e.target.value)} />
                </div>

                <div id="form-bottom">
                    <div>Difficulty</div>
                <select
                    id='difficulty'
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}>
                    <option value={1}>Trivial</option>
                    <option value={2}>Easy</option>
                    <option value={3}>Medium</option>
                    <option value={4}>Hard</option>
                </select>
                <div>Date</div>
                <input
                id='date'
                    type='date'
                    min={currentDate}
                    value={due_date}
                    onChange={e => setDue_date(e.target.value)} />
                {/* <select
                    id='completed'
                    value={completed}
                    onChange={e => setCompleted(e.target.value)}>
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                </select> */}
                <button type='button' id='delete-button'
                    onClick={handleDelete}><img src='/svg/garbage.svg' id='garbage'></img>Delete this Todo</button>
                </div>
            </form>
        </div>
    )

}
export default EditToDoForm
