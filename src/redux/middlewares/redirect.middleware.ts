import { globalNavigate } from '../../helpers/history';
import * as userConstants from '../constants/user.constants';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      console.log('entra aca');
      globalNavigate('/');
      console.log('Hace redirect');
      break;
    // case userConstants.USER_ON_LOGOUT:
    //   globalNavigate('/auth');
    //   break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
