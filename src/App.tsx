import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginContainer from './containers/LoginContainer';
import UsersListContainer from './containers/UsersListContainer';
import OrganizersListContainer from './containers/OrganizersListContainer';
import MainPageContainer from './containers/MainPageContainer';
import EventListContainer from './containers/EventListContainer';
import { GlobalHistory } from './helpers/history';
import PrivateRoute from './containers/PrivateRoute';
import { onInitialize } from './redux/actions/user.actions';
import { getCookie } from './helpers/cookies';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const email = getCookie('email');
  const password = getCookie('password');
  const cookieObject = { email, password };
  if (email && password) {
    dispatch(onInitialize(cookieObject));
  }
  return (
    <>
      <BrowserRouter>
        <GlobalHistory />
        <Routes>
        <Route
            path='/'
            element={
              <PrivateRoute>
                <MainPageContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/users'
            element={
              <PrivateRoute>
                <UsersListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/organizers'
            element={
              <PrivateRoute>
                <OrganizersListContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/events'
            element={
              <PrivateRoute>
                <EventListContainer />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
