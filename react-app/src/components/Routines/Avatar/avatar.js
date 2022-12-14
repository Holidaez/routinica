import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAvatar } from "../../../store/avatar"

const Avatar = () => {
    const dispatch = useDispatch()
    const currentAvatar = useSelector(state => state.avatar)
    const user = useSelector(state => state.session.user)
    useEffect(() => {
        dispatch(getAvatar(user))
    },[])
    return (
        <div id='avatar-container'>
            {currentAvatar.bangs === 'null' && (
                <img src={currentAvatar.bangs} id='null'></img>
            ) || currentAvatar.bangs != 'null' && (
                <img src={currentAvatar.bangs} id='bangs'></img>
            )}
            {currentAvatar.skin != 'null' && (
                <img src={currentAvatar.skin} id='skin'></img>
            )}

            {currentAvatar.body && (
                <img src={currentAvatar.body} id='body'></img>
            )}
            {currentAvatar.accent === 'null' && (
                <img src={currentAvatar.accent} id='null'></img>
            ) || currentAvatar.accent != 'null' && (
                <img src={currentAvatar.accent} id='accent'></img>
            )}
            {currentAvatar.style === 'null' && (
                <img src={currentAvatar.style} id='null'></img>
            ) || currentAvatar.style != 'null' && (
                <img src={currentAvatar.style} id='style'></img>
            )}
            {currentAvatar.facial === 'null' && (
                <img src={currentAvatar.facial} id='null'></img>
            ) || currentAvatar.facial != 'null' && (
                <img src={currentAvatar.facial} id='facial'></img>
            )}

            {currentAvatar.glasses === 'null' && (
                <img src={currentAvatar.glasses} id='null'></img>
            ) || currentAvatar.glasses != 'null' && (
                <img src={currentAvatar.glasses} id='glasses'></img>
            )}

            {currentAvatar.wheelchair === 'null' && (
                <img src={currentAvatar.wheelchair} id='null'></img>
            ) || currentAvatar.wheelchair != 'null' && (
                <img src={currentAvatar.wheelchair} id='wheelchair'></img>
            )}

            {currentAvatar.background && (
                <img src={currentAvatar.background} id='background'></img>
            )}

            {currentAvatar.animal_ears === 'null' && (
                <img src={currentAvatar.animal_ears} id='null'></img>
            ) || currentAvatar.animal_ears != 'null' && (
                <img src={currentAvatar.animal_ears} id='animal_ears'></img>
            )}

            {currentAvatar.animal_tails === 'null' && (
                <img src={currentAvatar.animal_tails} id='null'></img>
            ) || currentAvatar.animal_tails != 'null' && (
                <img src={currentAvatar.animal_tails} id='animal_tails'></img>
            )}

            {currentAvatar.headband === 'null' && (
                <img src={currentAvatar.headband} id='null'></img>
            ) || currentAvatar.headband != 'null' && (
                <img src={currentAvatar.headband} id='headband'></img>
            )}

        </div>
    )
}
export default Avatar
