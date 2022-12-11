import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getToDos } from '../../../store/todos'
import './todo.css'

//TODO: Complete logic to split the checklist.
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.

function ToDo () {
    const dispatch = useDispatch()
    const currentToDoList = useSelector(state => {
        return Object.values(state.todos)
    })
    // console.log(currentToDoList)
    useEffect(() => {
        dispatch(getToDos())
    }, [dispatch])

    return (
        <div className='routines-container'>
            <div className='add-routine'>Add a ToDo</div>
            {currentToDoList.map( todo => {
                return (
                    <div key={`to-${todo.id}`} className='todo-card'>
                        <div className='checkbox'>
                            <button>Done?</button>
                        </div>
                        <div>{todo.title}</div>
                        {todo.notes && (
                            <div>{todo.notes}</div>
                        )}
                        {todo.checklist && (
                            <div>{todo.checklist}</div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default ToDo;
