import React, { FunctionComponent } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import UsersListContainer from './containers/UsersListContainer';
import OrganizersListContainer from './containers/OrganizersListContainer';

const App: FunctionComponent = () => (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersListContainer />} />
          <Route path="/organizers" element={<OrganizersListContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    </>
);

export default App;
