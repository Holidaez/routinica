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
let initialState = {
    todos: null
}
export default function todosReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
            let newState = {}
            newState = { ...state, todos: [...action.todos.todos] } 
            return newState
        }
        default:
            return state;
    }
}
