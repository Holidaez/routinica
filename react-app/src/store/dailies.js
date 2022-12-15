//Definitions
const LOAD = '/dailies/LOAD'
const ADD_DAILY = '/dailies/ADD_DAILY'
const DELETE_DAILY = '/dailies/DELETE_DAILY'
const SET_CURRENT_DAILY = 'dailies/SET_CURRENT_DAILY'
//Actions
const load = dailiesList => ({
    type: LOAD,
    dailiesList
})

const addNewDaily = daily => ({
    type: ADD_DAILY,
    daily
})

const deleteD = dailyId => ({
    type: DELETE_DAILY,
    dailyId
})

//action to keep track of which daily is being interacted with
export const setCurrentDaily = id =>({
    type: SET_CURRENT_DAILY,
    id
})



//Thunks
export const getDailies = () => async(dispatch) => {
    const response = await fetch(`/api/dailies/test`)
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
            return data;
        } else {
            return ["Something went wrong, can't add that daily"]
        }
    }
}

export const editDaily = (form) => async(dispatch) => {
    console.log("in the add daily thunk", form)
    const response = await fetch('/api/dailies/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: form.id,
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


export const deleteDaily = (dailyId) => async (dispatch) => {
    const response = await fetch(`/api/dailies/${dailyId}`, {
        method: 'DELETE'
    })
    if (response.ok){
        dispatch(deleteD(dailyId))
    }
    return response.json()
}


//Reducer
//make sure to define initialState or remove the default variable
let initialState = {}
export default function dailiesReducer(state = initialState, action) {
    switch(action.type){
        case LOAD:{

            return {...state, ...action.dailiesList.dailies}
        }
        case ADD_DAILY: {
            const allDailies = {...state}
            allDailies[action.daily.id] = action.daily
            return allDailies
        }
        case DELETE_DAILY: {
            const allDailies = {...state}
            delete allDailies[action.dailyId]
            return allDailies
        }
        case SET_CURRENT_DAILY:{
            const allDailies = {...state, currentDaily: action.id}
            return allDailies
        }

        default:return state
    }
}
