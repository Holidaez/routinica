//Definitions
const LOAD = '/dailies/LOAD'
const ADD_DAILY = '/dailies/ADD_DAILY'

//Actions
const load = dailiesList => ({
    type: LOAD,
    dailiesList
})

const add = daily => ({
    type: ADD_DAILY,
    daily
})

//Thunks
export const getDailies = () => async(dispatch) => {
    const response = await fetch(`/api/dailies`)
    if (response.ok){
        const dailiesList = await response.json()
        dispatch(load(dailiesList))
    } else throw new Error("Bad Request")
}

export const addDaily = ({userId, start_date, repeats, repeats_on, title, notes, difficulty, streak, due, display_order}) => async(dispatch) => {
    const response = await fetch('/api/dailies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            start_date,
            repeats,
            repeats_on,
            title,
            notes,
            difficulty,
            streak,
            due,
            display_order
        })
    })
    if (response.ok) {
        const newDaily = await response.json();
        dispatch(add(newDaily))
        return newDaily
    } else {
        const data = await response.json();

    }


}

//Reducer
//make sure to define initialState or remove the default variable
let initialState = {}
export default function dailiesReducer(state = initialState, action) {
    switch(action.type){
        case LOAD:{
            const allDailies = {}
            action.dailiesList.dailies.forEach(daily => {
                allDailies[daily.id] = daily
            })
            return {...state, ...allDailies}
        }
        default:return state
    }
}
