//Definitions
const LOAD = '/todos/LOAD'

//Actions
const load = todos => ({
    type: LOAD,
    todos
})

//Thunks
export const getToDos = () => async (dispatch) => {
    const response = await fetch(`/api/todos`)
    if (response.ok){
        const todos = await response.json()
        dispatch(load(todos))
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
        default:
            return state;
    }
}
