import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getHabits, addHabit } from '../../../store/habits'
import { Modal } from '../../../context/Modal'
import './habits.css'
import '../routines.css'
import { NavLink } from 'react-router-dom';
//TODO:
//Conditionally render the optional elements. (completed - notes, checklist).
//Give appropriate class names to each of the elements on the todo cards.
//Complete logic and functionality for the cards and buttons.
//Add a css file and basic styling (conditional class rendering for colors of buttons depending on )


function Habit() {
    const dispatch = useDispatch()
    const currentHabitList = useSelector(state => {
        return Object.values(state.habits)
    })

    useEffect(() => {
        dispatch(getHabits())
    }, [dispatch])
    const [title, setTitle] = useState("")
    const userId = useSelector(state => state.session.user.id)
    const habitsLength = useSelector(state => Object.values(state.habits).length)
    const [showHabitModal, setShowHabitModal] = useState( )
        const handleSubmit = async (e) => {
            e.preventDefault()
            const payload = {
                userId,
                title,
                notes: '',
                difficulty: 0,
                reset_counter: 'Daily',
                positive_counter: 0,
                negative_counter: 0,
                positive_habit: false,
                negative_habit: false,
                strong_habit: false,
                display_order: habitsLength + 1
            }
            let createdHabit = await dispatch(addHabit(payload))

            if (createdHabit.errors){
                alert(createdHabit.errors.map(error => error))
            }
            setTitle("")
        }
    return (
        <div className='routines-container'>
            <form onSubmit={handleSubmit}>
            <input className='add-routine' placeholder='Add a Habit' value={title} onChange={(e) => setTitle(e.target.value)}/>

            </form>
            <div className='card-holder'>
            {currentHabitList.map(habit => {
                return (
                    <div key={`hab-${habit.id}`} className='habit-card'>
                        <div className='habit-plus-minus'>
                            {/* <button className='habit-plus-button'>+</button> */}
                        </div>
                        <NavLink className='navlink' to={`/habits/${habit.id}`} id='navlink'>
                        <div className='habit-info-container'><div className='habit-title'>{habit.title}</div>
                        {habit.notes && (
                            <div className='habit-notes'>{habit.notes}</div>
                        )}</div>
                        </NavLink>
                        {/* {habit.positive_counter && ( */}
                            {/* // <div className='positive-counter'>+{habit.positive_counter}</div> */}
                        {/* )} */}
                        {/* {habit.negative_counter && ( */}
                            {/* <div className='negative-counter'>-{habit.negative_counter}</div> */}
                        {/* )} */}
                        <div className='habit-plus-minus'>
                            {/* <button className='habit-minus-button'>-</button> */}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Habit;
