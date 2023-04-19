import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { login, getAllUsers, getAllOrganizers } from '../../services/user.services';
import * as actions from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userLogin(action: AnyAction): Generator {
  try {
    const data : any = yield call(login, action.formData);
    console.log('🚀 ~ function*userLogin ~ data:', data);
    yield put(actions.onLoginSucceeded(data));
  } catch (error) {
    yield put(actions.onLoginFailed(error));
  }
}

export function* eventsGetAllUsers() {
  try {
    const data: unknown = yield call(getAllUsers);
    yield put(actions.onGetAllUsersSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllUsersFailed(error));
  }
}

export function* eventsGetAllOrganizers() {
  try {
    const data: unknown = yield call(getAllOrganizers);
    yield put(actions.onGetAllOrganizersSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllOrganizersFailed(error));
  }
}

export function* watchUsers(): Generator {
  yield all([
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.EVENT_ON_GET_ALL_USERS_REQUESTED, eventsGetAllUsers),
    takeLatest(constants.EVENT_ON_GET_ALL_ORGANIZERS_REQUESTED, eventsGetAllOrganizers),
  ]);
}
