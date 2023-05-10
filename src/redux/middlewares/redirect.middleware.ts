import { globalNavigate } from '../../helpers/history';
import * as userConstants from '../constants/user.constants';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type, data } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      globalNavigate('/');
      break;
    case userConstants.USER_ON_LOGOUT:
      globalNavigate('/login');
      break;
    case userConstants.ON_GET_REPORTS_BY_ID_SUCCEEDED:
      globalNavigate(`/reportsByUser/${data.userId}`);
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
