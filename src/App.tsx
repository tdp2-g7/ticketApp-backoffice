import React, { FunctionComponent } from 'react';
import {
  Route, Routes, BrowserRouter, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginContainer from './containers/LoginContainer';
import UsersListContainer from './containers/UsersListContainer';
import OrganizersListContainer from './containers/OrganizersListContainer';
import EventListContainer from './containers/EventListContainer';
import ReportsByUserContainer from './containers/ReportsByUserContainer';
import ReportsByEventContainer from './containers/ReportsByEventContainer';
import ReportsContainer from './containers/ReportsContainer';
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
          <Route
            path='/reportsByUser/:id'
            element={
              <PrivateRoute>
                <ReportsByUserContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/reportsByEvent/:id'
            element={
              <PrivateRoute>
                <ReportsByEventContainer />
              </PrivateRoute>
            }
          />
          <Route
            path='/reports'
            element={
              <PrivateRoute>
                <ReportsContainer />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<LoginContainer />} />
          <Route path='*' element={<Navigate to='/users' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
