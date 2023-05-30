import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './404.css'
export default function FourOFour() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const returnToMain = () => {
    if (user) {
      let path = ('/main')
      history.push(path)
    } else {
      let path = ('/')
      history.push(path)
    }
  }
  return (
    <div id="background-404">
      <img id="four-o-four-png-div" src="/404.routinica.png" alt="A 404 on a 404!!!"></img>
      <h1>Sometimes even the bravest adventurer gets lost.</h1>
      <p>
        Looks like this link is broken or the page may have moved, sorry!
      </p>
      <div >Head back to the <button onClick={returnToMain} id="home-page-button">Homepage</button> adventurer</div>
    </div>
  )
}
