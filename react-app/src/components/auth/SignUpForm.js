import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signupform.css'
const SignUpForm = () => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [gold, setgold] = useState(0);
  const [experience, setexperience] = useState(0);
  const [level, setlevel] = useState(0);
  const [health, sethealth] = useState(50);
  const [created_at, setcreated_at] = useState(new Date());
  const [login_date, setlogin_date] = useState(new Date());
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, gold, experience, level, health, created_at, login_date));
      if (data) {
        setErrors(data)
        if (user) {
          return <Redirect to='/users' />
        }
      }
    }
  };
  const redirectToLogin = () => {
    let path ='/login'
    history.push(path)
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to='/users' />;
  // }

  return (
    <div className='top-div'>
      <div id='top-nav-bar'>
        <div id="logo"><img src="/svg/habitica_logo.svg" alt="image Not Found"></img>
        <img src="routinica_true_purple.svg" alt="image Not Found"></img>
        </div>
        <button id="login-button" onClick={redirectToLogin}>Login</button>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Varela+Round" />
      </div>
      <div className="upper-form-text">
        <div className="column-left">
          <img id="wizards" src="/png/home-main@habitica.png"></img>
          <div className='big-quote'>Motivate yourself to achieve your goals</div>
          <div id='paragraph-big-quote'>It's time to have fun when you get things done! Join over 4 million Habiticans and improve your life one task at a time</div>
        </div>
        <div className="column-right">
          <div id="sign-up-for-free">
          <h2>Sign up for free</h2>
          </div>
          <div id="info-paragraph">Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores, and cannot include any inappropriate terms.</div>
          <form onSubmit={onSignUp} className='sign-up-form'>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              {/* <label>User Name</label> */}
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                placeholder='Username'
              ></input>
            </div>
            <div>
              {/* <label>Email</label> */}
              <input
                type='text'
                name='email'
                onChange={updateEmail}
                value={email}
                placeholder='Email'
              ></input>
            </div>
            <div>
              {/* <label>Password</label> */}
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                placeholder='Password'
              ></input>
            </div>
            <div>
              {/* <label>Repeat Password</label> */}
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                placeholder='Confirm Password'
              ></input>
            </div>
            <div id="bottom-paragraph-info">By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</div>
            <button type='submit' className='signup-button'>Sign Up</button>
          </form>
        </div>
      </div>
      <div id="arrow-container"><div><img id="down-arrow" src="/svg/double_down_arrows.svg"></img></div></div>
      <div><img id="bit-pattern-one" src="/svg/bit_pattern_01.svg"></img></div>
    </div>
  );
};

export default SignUpForm;
