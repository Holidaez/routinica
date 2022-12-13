//Definitions
const SET_AVATAR = 'avatar/SET_AVATAR'

//Actions
const setAvatar = data => ({
    type: SET_AVATAR,
    payload: data
})

//Thunks
export const getAvatar = () => async (dispatch) => {
    const response = await fetch('/api/avatar')
    if (response.ok){
        const data = await response.json()
        dispatch(setAvatar(data))
    }

}

//Reducer
//make sure to define initialState or remove the default variable


export default function avatarReducer(state={}, action) {
    switch(action.type) {
        case SET_AVATAR: {
            const newState = {...state, ...action.payload}
            return newState.avatar
        }
        default:
            return state

    }
}