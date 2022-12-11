import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getToDos } from '../../store/todos'
import './todo.css'

function ToDo() {
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todos.todos)
    console.log(todo)
    useEffect(() => {
        dispatch(getToDos())
        // console.log('inside dispatch', todo)
    }, [dispatch])
    if (!todo) {
        <h1>You have no todos saved!</h1>
    };

    return (
        // 

        <div className='tasks-container'>
            {todo.map(to => (
                <div key={`to${to.id}`}>{to.title}</div>
            ))}
        </div>
    )
}

export default ToDo;