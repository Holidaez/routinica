import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from '../../store/session'

const LogOutPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(logout())
    },[])
    if(!user) {
        return <Redirect to='/'/>
    }
    return(
        <h1>Logging Out </h1>
    )
}
export default LogOutPage
