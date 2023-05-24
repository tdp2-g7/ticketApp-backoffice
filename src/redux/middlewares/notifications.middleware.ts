import {
  sendErrorNotification,
  sendSuccessNotification,
} from '../../helpers/notifications';
import * as userConstants from '../constants/user.constants';
import * as eventConstants from '../constants/event.constants';

const notificationMiddleware = () => (next: any) => (action: any) => {
  const { type } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      sendSuccessNotification('Sesion iniciada correctamente');
      break;
    case userConstants.USER_ON_LOGIN_FAILED:
      sendErrorNotification('Usuario o contraseña incorrecta');
      break;
    case userConstants.USER_ON_LOGOUT:
      sendSuccessNotification('Sesion finalizada correctamente');
      break;
    case userConstants.ON_CHANGE_BLOCK_SUCCEEDED:
      sendSuccessNotification('Estado del usuario fue modificado correctamente');
      break;
    case userConstants.ON_CHANGE_BLOCK_FAILED:
      sendErrorNotification('El estado del usuario no puede ser modificado');
      break;
    case eventConstants.ON_CHANGE_BLOCK_EVENT_SUCCEEDED:
      sendSuccessNotification('El estado del evento fue modificado correctamente');
      break;
    case eventConstants.ON_CHANGE_BLOCK_EVENT_FAILED:
      sendErrorNotification('El estado del evento no puede ser modificado');
      break;
    case eventConstants.ON_GET_EVENT_REPORTS_BY_ID_SUCCEEDED:
    case eventConstants.ON_GET_EVENT_REPORTS_BY_ID_FAILED:
    case eventConstants.ON_GET_EVENTS_FILTERED_BY_SUCCEEDED:
    case eventConstants.ON_GET_EVENTS_FILTERED_BY_FAILED:
    case eventConstants.ON_GET_ALL_EVENT_REPORTS_SUCCEEDED:
    case eventConstants.ON_GET_ALL_EVENT_REPORTS_FAILED:
    case userConstants.ON_GET_ALL_USERS_SUCCEEDED:
    case userConstants.ON_GET_ALL_USERS_FAILED:
    case userConstants.ON_GET_ALL_ORGANIZERS_SUCCEEDED:
    case userConstants.ON_GET_ALL_ORGANIZERS_FAILED:
    case userConstants.ON_GET_REPORTS_BY_ID_SUCCEEDED:
    case userConstants.ON_GET_REPORTS_BY_ID_FAILED:
    case userConstants.ON_GET_ALL_ORGANIZER_REPORTS_SUCCEEDED:
    case userConstants.ON_GET_ALL_ORGANIZER_REPORTS_FAILED:
      break;
    default:
      break;
  }
  return next(action);
};

export default notificationMiddleware;
