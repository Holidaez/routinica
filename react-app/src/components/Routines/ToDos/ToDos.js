import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getToDos, addToDos } from '../../../store/todos'
import './todo.css'
import '../routines.css'

//TODO: Complete logic to split the checklist.
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.

function ToDo() {
    const dispatch = useDispatch()
    const currentToDoList = useSelector(state => {
        return Object.values(state.todos)
    })
    // console.log(currentToDoList)
    useEffect(() => {
        dispatch(getToDos())
    }, [dispatch])


    const userId = useSelector(state => state.session.user.id)
    const todosLength = useSelector(state => Object.values(state.todos).length)
    const currentDate = new Date().toJSON().slice(0, 10)
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        console.log('here')
        e.preventDefault()
        const payload = {
            userId,
            title,
            notes:'',
            difficulty:1,
            due_date:currentDate,
            completed:false,
            display_order: todosLength + 1
        }
        let createdToDo = await dispatch(addToDos(payload))
        if (createdToDo) console.log("You created a Todo")
        setTitle("")
    }

    return (
        <div className='routines-container'>
            <link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'></link>
            <form onSubmit={handleSubmit}>
            <input className='add-routine' placeholder='Add a ToDo' value={title} onChange={(e) => setTitle(e.target.value)}/>
            </form>
            {currentToDoList.map(todo => {
                return (
                    <div key={`to-${todo.id}`} className='todo-card'>
                        <div className='todo-checkbox-container'>
                            <button className='todo-checkbox' />
                            <button className='hidden' placeholder='✔' />
                        </div>

                        <div className='todo-info-container'>
                            <div className='todo-card-title'>{todo.title}</div>
                            {todo.notes && (
                                <div className='todo-card-notes'>{todo.notes}</div>
                            )}
                            {todo.checklist && (
                                <div className='todo-card-checklist'>{todo.checklist}</div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDo;
