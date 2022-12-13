import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
export default function FourOFour() {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const returnToMain = () => {
    if(user){
      let path = ('/main')
      history.push(path)
    }else {
      let path = ('/')
      history.push(path)
    }
  }
  return (
    <div id="background-404">
      <div id="title-bar">
        <img src="/python_proj_logo.svg"></img>
      </div>
      <div id="four-o-four-png-div">
        <img src="/404.routinica.png" alt="A 404 on a 404!!!"></img>
      </div>
      <h1>Sometimes even the bravest adventurer gets lost.</h1>
      <p>
        Looks like this link is broken or the page may have moved, sorry!
      </p>
      <div>Head back to the <button onClick={returnToMain}>Homepage</button></div>
    </div>
  )
}
