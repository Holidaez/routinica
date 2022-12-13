import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import LogOutPage from './components/auth/LogOutPage'
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ToDo from './components/Routines/ToDos/ToDos'
import Habit from './components/Routines/Habits/Habit'
import Daily from './components/Routines/Dailies/Daily'
import Routines from './components/Routines';
import EditAvatar from './components/avatar/EditAvatar';
import AddToDo from './components/Routines/ToDos/AddToDo';
import { authenticate } from './store/session';
import logout from './store/session.js'
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/main' exact={true}>
          <Routines />
          <AddToDo />
        </Route>
        <Route path='/todos' exact={true}>
          <ToDo />
        </Route>
        <Route path='/habits' exact={true}>
          <Habit />
        </Route>
        <Route path='/dailies' exact={true}>
          <Daily />

        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/main' exact={true} >
          <h1>My Home Page</h1>
        </Route>
        <Route path='/edit/avatar' exact={true}>
          <EditAvatar/>
        </Route>
        <Route path='/logout' exact={true}>
          <LogOutPage />
        </Route>
        <Route path='/' exact={true}>
          <SignUpForm />
        </Route>
        {/* <Route path='/' exact={true} >
          <h1>My Home Page</h1>
        </Route> */}
      </Switch>
      {/* <404>*/}
    </BrowserRouter>
  );
}

export default App;
