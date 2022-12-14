//Definitions
const LOAD = '/todos/LOAD'
const ADD = '/todos/ADD'
const DELETE = '/todos/DELETE'
const REMOVE_TODOS = 'todos/REMOVE_TODOS'
//Actions
const load = todos => ({
    type: LOAD,
    todos
})

const add = todo => ({
    type: ADD,
    todo
})

const deleteT = todoId => ({
    type: DELETE,
    todoId
})
export const removeTodos = () => ({
    type:REMOVE_TODOS
})
//Thunks
export const getToDos = () => async (dispatch) => {
    const response = await fetch(`/api/dailies/test`)
    if (response.ok){
        const todos = await response.json()
        dispatch(load(todos))
    }
}

export const addToDos = (form) => async (dispatch) => {
    const response = await fetch('/api/todos/add' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId : form.userId,
            title: form.title,
            notes: form.notes,
            difficulty: form.difficulty,
            due_date: form.due_date,
            completed: form.completed,
            display_order: form.display_order
        })
    })
    if (response.ok) {
        const newToDo = await response.json()
        dispatch(add(newToDo))
        return newToDo
    } else {
        const data = await response.json()
        if (data.errors){
            return data;
        } else {
            return ["Something went wrong, can't edit that Todo"]
        }
    }
}

export const editAToDo = (form) => async(dispatch) => {
    const response = await fetch('/api/todos/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: form.id,
            userId : form.userId,
            title: form.title,
            notes: form.notes,
            difficulty: form.difficulty,
            due_date: form.due_date,
            completed: form.completed,
            display_order: form.display_order
        })
    })
    if (response.ok){
        const newToDo = await response.json()
        dispatch(add(newToDo))
        return newToDo;
    } else {
        const data = await response.json()
        if (data.errors){
            return data;
        } else {
            return ["Something went wrong, can't edit that Todo"]
        }
    }
}

export const deleteToDo = (todoId) => async (dispatch) => {
    const response = await fetch(`/api/todos/${todoId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(deleteT(todoId))
    }
    return response.json()
}
//Reducer
//make sure to define initialState or remove the default variable

//Note the decision to normalize the data (no more todo.todo)
//if you want to see the shape of the state check the dev tools on chrome

let initialState = {}
export default function todosReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {

            return {...state, ...action.todos.todos}
        }
        case ADD: {
            const allToDos = {...state}
            allToDos[action.todo.id] = action.todo
            return allToDos
        }
        case DELETE: {
            const allToDos = {...state}
            delete allToDos[action.todoId]
            return allToDos
        }
        case REMOVE_TODOS: {
            return {}
        }
        default:
            return state;
    }
}
