import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { getDailies, addDaily, editDaily } from '../../../store/dailies'
import EditDailyForm from './EditDaily';
import '../routines.css'
import './daily.css'
//TODO:
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.
//Add a css file and basic styling


function Daily() {
    const dispatch = useDispatch()
    const currentDailiesList = useSelector(state => {
        return Object.values(state.dailies)
    })
    const [showEditDailyModal, setShowEditDailyModal] = useState(false)
    const [currentDaily, setCurrentDaily] = useState(0)
    const [stateDaily, setStateDaily] = useState(0)
    const [checking, setChecking] = useState(false)
    useEffect(() => {
        dispatch(getDailies())
    }, [dispatch])
    const [title, setTitle] = useState("")
    const userId = useSelector(state => state.session.user.id)
    const dailiesLength = useSelector(state => Object.values(state.dailies).length)
    const currentDate = new Date().toJSON().slice(0, 10)
    const [displayOrder, setDisplayOrder] = useState(dailiesLength)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userId,
            startDate: currentDate,
            repeats: 'weekly',
            repeatsOn: 1,
            title,
            notes: '',
            difficulty: 2,
            streak: 1,
            due: true,
            displayOrder: dailiesLength + 1
        }
        let createdDaily = await dispatch(addDaily(payload))
        if (createdDaily.errors){
            alert(createdDaily.errors.map(error => error))
        }
        setTitle("")

    }



        const clickHandler = (e) => {
            e.stopPropagation()
            if (!isNaN(e.target.id)) {
                setCurrentDaily(e.target.id)
                setShowEditDailyModal(true)
            }


        }


        const swapModal = () => {
            if(showEditDailyModal === false){
                setShowEditDailyModal(true)
            }
            if(showEditDailyModal === true){
                setShowEditDailyModal(false)
            }
        }

        const updateCompleted = async (e, daily) => {
            e.preventDefault()
            setChecking(true)
            if(daily.due === true){
                daily.due = false
            }else {
                daily.due = true
            }
            let streaker = daily.streak + 1
            const payload = {
                id:daily.id,
                userId:daily.userId,
                startDate:daily.start_date,
                repeats:daily.repeats,
                repeatsOn:daily.repeats_on,
                difficulty:daily.difficulty,
                streak:streaker,
                notes:daily.notes,
                title:daily.title,
                due:daily.due,
                displayOrder:daily.display_order,


            }
            let checkboxUpdate = await dispatch(editDaily(payload))
            if(checkboxUpdate.errors){
                return alert(checkboxUpdate.errors.map(error=>error))
            }
            setChecking(false)
        }


        return (

        <div className='routines-container'>
            {/* <div className='dailies-title'>Dailies</div> */}
            <form onSubmit={handleSubmit}>
                <input className='add-routine' placeholder='Add a Daily' value={title} onChange={(e) => setTitle(e.target.value)} />
            </form>
            <div className='card-holder'>
            {currentDailiesList.map(daily => {
                return (
                    <div key={`day-${daily.id}`} className='daily-card'>

                        <div className='dailies-checkbox-div'>
                            <input className='daily-checkbox'
                            type='checkbox'
                            checked={!daily.due}
                            onChange={(e) => updateCompleted(e,daily)}
                             />
                        </div>
                        <NavLink className='navlink' to={`/dailies/${daily.id}`}>
                        <div className='daily-info-container'>
                                <div className='daily-card-title'>{daily.title}</div>
                                {daily.notes && (
                                    <div className='daily-card-notes'>{daily.notes}</div>
                                )}
                            </div>
                            </NavLink>
                            {daily.checklist && (
                                <div className='daily-card-checklist'>{daily.checklist}</div>
                            )}
                        </div>

                )
            })}
            </div>
        </div>

    )
}

export default Daily;
