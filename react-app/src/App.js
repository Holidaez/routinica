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
import EditDailyForm from './components/Routines/Dailies/EditDaily';
import EditHabit from './components/Routines/Habits/EditHabit';
import FourOFour from './components/404/404.js';
import { authenticate } from './store/session';
import logout from './store/session.js'
import EditToDoForm from './components/Routines/ToDos/EditToDos';
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
        </Route>
        <Route path='/todos' exact={true}>
          <ToDo />
        </Route>
        <Route path='/habits' exact={true}>
          <Habit />
        </Route>
        <Route path='/habits/:habitId'>
          <EditHabit />
        </Route>
        <Route path='/dailies/:dailyId'>
          < EditDailyForm/>
        </Route>
        <Route path='/todos/:toDoId'>
          <EditToDoForm />
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
        <Route path='*'>
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
