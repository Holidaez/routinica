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
let initialState = {}
export default function habitsReducer(state = initialState, action) {
    switch(action.type){
        case LOAD: {
        const allHabits = {}
            action.habitList.habits.forEach(habit => {
                allHabits[habit.id] = habit
            })
            return {...state, ...allHabits}
        }
        default:
            return state;
    }
}
