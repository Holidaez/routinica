//Definitions
const LOAD = '/dailies/LOAD'

//Actions
const load = dailiesList => ({
    type: LOAD,
    dailiesList
})

//Thunks
export const getDalies = () => async(dispatch) => {
    const response = await fetch(`/api/dailies`)
    if (response.ok){
        const dailiesList = await response.json()
        dispatch(load(dailiesList))
    } else throw new Error("Bad Request")
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
