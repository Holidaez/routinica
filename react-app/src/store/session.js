// constants
import { addAvatar, changeAvatar } from "./avatar";
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password, gold, experience, level, health, created_at, login_date) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      gold,
      experience,
      level,
      health,
      created_at,
      login_date
    }),
  });
  if(response.ok){
    const data = await response.json();
    dispatch(addAvatar({
    body:"/avatar/body/blue/broad_shirt_blue.png",
    skin:"/avatar/skin/skin_98461a.png",
    bangs:"/avatar/hair/color/blond/hair_bangs_1_blond.png" ,
    style: "/avatar/hair/color/blond/style/hair_base_1_blond.png",
    facial:"/avatar/hair/color/blond/facial/buy_with_jewels/hair_mustache_1_blond.png",
    glasses:"/avatar/extra/glasses/eyewear_special_blackTopFrame.png" ,
    wheelchair: "/avatar/extra/wheelchair/button_chair_green.png",
    accent: "/avatar/extra/accent/hair_flower_5.png",
    animal_ears:"/avatar/extra/animal_ears/headAccessory_special_foxEars.png" ,
    animal_tails:"/avatar/extra/animal_tails/icon_back_special_pigTail.png" ,
    headband:"/avatar/extra/headband/headAccessory_special_blueHeadband.png",
    background:"/avatar/backgrounds/background_purple.png" ,
    userId: data.id
    }))
    dispatch(setUser(data))
  }
  if (response.ok) {
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
