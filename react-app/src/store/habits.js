//Definitions
const LOAD = '/habits/LOAD'
const ADD = '/habits/ADD'
const DELETE = '/habits/DELETE'
//Actions
const load = habitList => ({
    type: LOAD,
    habitList
})
const add = habit => ({
    type: ADD,
    habit
})
const deleteH = habitId => ({
    type: DELETE,
    habitId
})
//Thunks
export const getHabits = () => async (dispatch) => {
    const response = await fetch(`/api/habits`)
    if (response.ok){
        const habitList = await response.json()
        dispatch(load(habitList))
    }
}

export const addHabit = (form) => async (dispatch) => {
    const response = await fetch(`/api/habits/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: form.userId,
            title: form.title,
            notes: form.notes,
            difficulty: form.difficulty, 
            reset_counter: form.reset_counter,
            positive_counter: form.positive_counter,
            negative_counter: form.negative_counter,
            positive_habit: form.positive_habit,
            negative_habit: form.negative_habit,
            strong_habit: form.strong_habit,
            display_order: form.display_order
        })
    })
    if (response.ok){
        const newHabit = await response.json()
        dispatch(add(newHabit))
        return newHabit
    } else {
        const data = await response.json();
        if (data.errors){
            return data.errors;
        } else {
            return ["Something went wrong, can't add that daily"]
        }
    }
}

export const editAHabit = (form) => async(dispatch) => {
    const response = await fetch(`/api/habits/edit`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: form.id,
            userId: form.userId,
            title: form.title,
            notes: form.notes,
            difficulty: form.difficulty, 
            reset_counter: form.reset_counter,
            positive_counter: form.positive_counter,
            negative_counter: form.negative_counter,
            positive_habit: form.positive_habit,
            negative_habit: form.negative_habit,
            strong_habit: form.strong_habit,
            display_order: form.display_order
        })
    })
    if (response.ok){
        const newHabit = await response.json()
        dispatch(add(newHabit))
        return newHabit
    } else {
        const data = await response.json();
        if (data.errors){
            return data.errors;
        } else {
            return ["Something went wrong, can't add that daily"]
        }
    }
}

export const deleteHabit = (habitId) => async (dispatch) => {
    const response = await fetch(`/api/habits/${habitId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(deleteH(habitId))
    }
    return response.json()
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
        case ADD: {
            const allHabits = {...state}
            allHabits[action.habit.id] = action.habit
            return allHabits
        }
        case DELETE: {
            const allHabits = {...state}
            delete allHabits[action.habitId]
            return allHabits
        }
        default:
            return state;
    }
}
