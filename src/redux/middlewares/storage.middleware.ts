import * as constants from '../constants/user.constants';
import { setCookie } from '../../helpers/cookies';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { formData, type } = action;
  console.log('🚀 ~ storageMiddleware ~ data:', formData);
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
      setCookie('email', formData.email, { path: '/' });
      setCookie('password', formData.password, { path: '/' });
      break;
    // case constants.USER_ON_LOGOUT:
    //   removeCookie('email', { path: '/' });
    //   removeCookie('userId', { path: '/' });
    //   break;
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
