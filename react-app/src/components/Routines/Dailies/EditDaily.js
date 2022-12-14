import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { editDaily, deleteDaily } from "../../../store/dailies";
import './EditDaily.css'

export default function EditDailyForm({ onComplete, currentDailyId }) {
    console.log(currentDailyId, "survey says: the id is that")
    const dispatch = useDispatch()
    const history = useHistory()
    // const { dailyId } = useParams()

    const currentDaily = useSelector(state => state.dailies[currentDailyId])
    const currentDate = new Date().toJSON().slice(0, 10)



    const [startDate, setStartDate] = useState(currentDaily.start_date)
    const [repeats, setRepeats] = useState(currentDaily.repeats)
    const [repeatsOn, setRepeatsOn] = useState(currentDaily.repeats_on) //is this correct???
    const [title, setTitle] = useState(currentDaily.title)
    const [notes, setNotes] = useState(currentDaily.notes)
    const [difficulty, setDifficulty] = useState(currentDaily.difficulty)
    const [streak, setStreak] = useState(currentDaily.streak)
    const [due, setDue] = useState(currentDaily.due)
    const [displayOrder, setDisplayOrder] = useState(currentDaily.display_order)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            id: currentDaily.id,
            userId: currentDaily.userId,
            startDate,
            repeats,
            repeatsOn,
            title,
            notes,
            difficulty,
            streak,
            due,
            displayOrder
            //TODO: remember to render CSRF token on backend!
        }

        let createdDaily = await dispatch(editDaily(payload))
        if (createdDaily) {
            history.push('/main')
            onComplete()
        }
    }

    const handleCancel = () => {
        console.log("in cancel")
        history.push('/main')
        onComplete()
    }

    const handleDelete = () => {
        dispatch(deleteDaily(currentDaily.id))
        history.push('/main')
        // onComplete()

    }
    return (

        <form className="edit-container" onSubmit={handleSubmit}>

            <input
                type='text'
                placeholder='Add a title'
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type='text'
                placeholder='Add notes'
                value={notes}
                onChange={e => setNotes(e.target.value)} />

            <input
                type='date'
                min={currentDate}
                value={startDate}
                onChange={e => setStartDate(e.target.value)} />
            <select
                id='repeats'
                value={repeats}
                onChange={e => setRepeats(e.target.value)}>
                <option value={'daily'}>Daily</option>
                <option value={'weekly'}>Weekly</option>
                <option value={'monthly'}>Monthly</option>
                <option value={'yearly'}>Yearly</option>

            </select>
            {repeats === 'daily' && (
                <div>

                    <input
                        placeholder="Choose how often this repeats"
                        type='text'
                        value={repeatsOn}
                        onChange={e => setRepeatsOn(e.target.value)} />
                    <div className="repeats-label">Day</div>
                </div>
            )}
            {repeats === 'weekly' && (
                <div>
                    <input
                        placeholder="Choose how often this repeats"
                        type='text'
                        value={repeatsOn}
                        onChange={e => setRepeatsOn(e.target.value)} />
                    <div className="repeats-label">Week</div>
                </div>
            )}
            {repeats === 'monthly' && (
                <div>
                    <input
                        placeholder="Choose how often this repeats"
                        type='text'
                        value={repeatsOn}
                        onChange={e => setRepeatsOn(e.target.value)} />
                    <div className="repeats-label">Month</div>
                </div>
            )}
            {repeats === 'yearly' && (
                <div>
                    <input
                        placeholder="Choose how often this repeats"
                        type='text'
                        value={repeatsOn}
                        onChange={e => setRepeatsOn(e.target.value)} />
                    <div className="repeats-label">Year</div>
                </div>
            )}


            <select
                id='difficulty'
                value={difficulty}
                onChange={e => setDifficulty(e.target.value)}>
                <option value={1}>Trivial</option>
                <option value={2}>Easy</option>
                <option value={3}>Medium</option>
                <option value={4}>Hard</option>

            </select>
            <input
                type='text'
                placeholder='Streak'
                value={streak}
                onChange={e => setStreak(e.target.value)} />

            <button type='submit'
                onSubmit={handleSubmit}>Update Daily</button>
            <button type='button'
                onClick={handleCancel}>Cancel</button>
            <button type='button'
                onClick={handleDelete}>Delete this Daily</button>
        </form>


    )
}
