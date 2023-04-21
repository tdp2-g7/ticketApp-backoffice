/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../helpers/cookies';

const PrivateRoute: FunctionComponent<any> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const email = getCookie('email');
  const location = useLocation();

  if (!email) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
