import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginContainer from './containers/LoginContainer';
import UsersListContainer from './containers/UsersListContainer';
import OrganizersListContainer from './containers/OrganizersListContainer';
import { GlobalHistory } from './helpers/history';
import PrivateRoute from './containers/PrivateRoute';
import { onLoginRequested } from './redux/actions/user.actions';
import { getCookie } from './helpers/cookies';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();

  const email = getCookie('email');
  const password = getCookie('password');
  const cookieObject = { email, password };
  if (email && password) {
    dispatch(onLoginRequested(cookieObject));
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
          <Route path='/login' element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
