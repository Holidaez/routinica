import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/main' />;
  }

  return (
    <div className='login-form-wrapper'>
      <div className='star-background'>
        {/* <img src="/png/seamless_stars_varied_opacity.5eaefaf6.png" alt="background image not found" className='stars-image'/> */}
        <div id="routinica-logo">
          <img src="/svg/habitica_logo.svg"></img>
        </div>
        <div id="routinica-title">
          <img src="python_proj_logo.svg"></img>
        </div>
      </div>
      <form onSubmit={onLogin} className='sign-in-form'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='login-form-input'>
          <label htmlFor='email' className='login-form-label'>Email</label>
          <input className='login-form-data'
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-form-input'>
          <label htmlFor='password' className='login-form-label'>Password</label>
          <input className='login-form-data'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
        </div>
      </form>
      <div className='mountain-background'></div>
      <div id="town-of-routinica">
        <img id="town" src="/png/town_of_habitica.png" alt="Image not found"></img>
      </div>
    </div>
  );
};

export default LoginForm;
