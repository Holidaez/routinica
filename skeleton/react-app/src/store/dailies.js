//Definitions
const LOAD = '/dailies/LOAD'
const ADD_DAILY = '/dailies/ADD_DAILY'

//Actions
const load = dailiesList => ({
    type: LOAD,
    dailiesList
})

const addNewDaily = daily => ({
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

export const addDaily = (form) => async(dispatch) => {
    console.log("in the add daily thunk", form)
    const response = await fetch('/api/dailies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: form.userId,
            start_date: form.startDate,
            repeats: form.repeats,
            repeats_on: form.repeatsOn,
            title: form.title,
            notes: form.notes,
            difficulty: form.difficulty,
            streak: form.streak,
            due: form.due,
            display_order: form.displayOrder
        })
    })
    if (response.ok) {
        const newDaily = await response.json();
        dispatch(addNewDaily(newDaily))
        return newDaily
    } else {
        const data = await response.json();
        if (data.errors){
            return data.errors;
        } else {
            return ["Something went wrong, can't add that daily"]
        }
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
        case ADD_DAILY: {
            const allDailies = {...state}
            allDailies[action.daily.id] = action.daily
            return allDailies
        }
        default:return state
    }
}
