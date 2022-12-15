//Definitions
const SET_AVATAR = 'avatar/SET_AVATAR'

//Actions
const setAvatar = data => ({
    type: SET_AVATAR,
    payload: data
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
    console.log("entered change avatar")
    const response = await fetch('/api/avatar/update', {
        method: 'PUT',
        body: JSON.stringify({ ...newAvatar })
    })

    if (response.ok) {
        console.log(response.body)
        console.log("entered setAvatar")
        const data = await response.json()
        dispatch(setAvatar(data))
    }
}

export const addAvatar = (form) => async (dispatch) => {
    console.log('entered add avatar')
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
        default:
            return state

    }
}
