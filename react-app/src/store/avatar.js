//Definitions
const SET_AVATAR = 'avatar/SET_AVATAR'
const REMOVE_AVATAR = 'avatar/REMOVE_AVATAR'
//Actions
const setAvatar = data => ({
    type: SET_AVATAR,
    payload: data
})
export const remove_avatar = () => ({
    type:REMOVE_AVATAR
})
//Thunks
export const getAvatar = (user) => async (dispatch) => {
    const response = await fetch('/api/avatar/', {
        method: 'POST',
        body:JSON.stringify(user)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(setAvatar(data))
    }

}

export const changeAvatar = (newAvatar) => async (dispatch) => {
    const response = await fetch('/api/avatar/update', {
        method: 'PUT',
        body: JSON.stringify({ ...newAvatar })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(setAvatar(data))
    }
}

export const addAvatar = (form) => async (dispatch) => {
    const response = await fetch('/api/avatar/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({...form})
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(setAvatar(data))
    }
}
//Reducer
//make sure to define initialState or remove the default variable


export default function avatarReducer(state = {}, action) {
    switch (action.type) {
        case SET_AVATAR: {
            const newState = { ...state, ...action.payload }
            return newState.avatar
        }
        case REMOVE_AVATAR: {
            return {}
        }
        default:
            return state

    }
}
