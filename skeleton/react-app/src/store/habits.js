//Definitions
const LOAD = '/habits/LOAD'

//Actions
const load = habitList => ({
    type: LOAD,
    habitList
})

//Thunks
export const getHabits = () => async (dispatch) => {
    const response = await fetch(`/api/habits`)
    if (response.ok){
        const habitList = await response.json()
        dispatch(load(habitList))
    }
}

//Reducer
//make sure to define initialState or remove the default variable
let initialState = {
    habits: null
}
export default function habitsReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
            let newState = {}
            newState = {...state, habits: [...action.habitList.habits]}
            return newState
        }
        default:
            return state;
    }
}
