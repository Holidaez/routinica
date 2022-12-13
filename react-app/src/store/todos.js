//Definitions
const LOAD = '/todos/LOAD'
const ADD = '/todos/ADD'
//Actions
const load = todos => ({
    type: LOAD,
    todos
})

const add = todo => ({
    type: ADD,
    todo
})
//Thunks
export const getToDos = () => async (dispatch) => {
    const response = await fetch(`/api/todos`)
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
        return ['Something went wrong']
    }
}

//Reducer
//make sure to define initialState or remove the default variable

//Note the decision to normalize the data (no more todo.todo)
//if you want to see the shape of the state check the dev tools on chrome

let initialState = {}
export default function todosReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
            const allToDos = {}
            action.todos.todos.forEach(todo => {
                allToDos[todo.id] = todo
            })
            return {...state, ...allToDos}
        }
        case ADD: {
            const allToDos = {...state}
            allToDos[action.todo.id] = action.todo
            return allToDos
        }
        default:
            return state;
    }
}
