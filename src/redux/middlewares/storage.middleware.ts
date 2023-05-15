import * as constants from '../constants/user.constants';
import { removeCookie, setCookie } from '../../helpers/cookies';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { formData, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
      setCookie('email', formData.email, {
        path: '/',
        maxAge: 3600,
      });
      setCookie('password', formData.password, {
        path: '/',
        maxAge: 3600,
      });
      break;
    case constants.USER_ON_LOGOUT:
      removeCookie('email', { path: '/' });
      removeCookie('userId', { path: '/' });
      break;
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
