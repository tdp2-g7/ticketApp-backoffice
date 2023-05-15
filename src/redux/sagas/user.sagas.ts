import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  login, getAllUsers, getAllOrganizers, changeBlock, getAllReports, getOrganizerReports,
} from '../../services/user.services';
import * as actions from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userInitialize(action: AnyAction): Generator {
  try {
    const data : any = yield call(login, action.formData);
    yield put(actions.onInitializeSucceeded(data));
  } catch (error) {
    yield put(actions.onInitializeFailed(error));
  }
}

export function* userLogin(action: AnyAction): Generator {
  try {
    const data : any = yield call(login, action.formData);
    yield put(actions.onLoginSucceeded(data));
  } catch (error) {
    yield put(actions.onLoginFailed(error));
  }
}

export function* eventsGetAllUsers(): Generator {
  try {
    const { data }: any = yield call(getAllUsers);
    yield put(actions.onGetAllUsersSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllUsersFailed(error));
  }
}

export function* eventsGetAllOrganizers(): Generator {
  try {
    const { data }: any = yield call(getAllOrganizers);
    yield put(actions.onGetAllOrganizersSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllOrganizersFailed(error));
  }
}

export function* onChangeBlock(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(changeBlock, action.organizerId);
    yield put(actions.onChangeBlockSucceeded(data));
  } catch (error) {
    yield put(actions.onChangeBlockFailed(error));
  }
}

export function* getAllReportsById(action: AnyAction): Generator {
  try {
    const data : any = yield call(getAllReports, action.data);
    yield put(actions.onGetReportsByIdSucceeded(data));
  } catch (error) {
    yield put(actions.onGetReportsByIdFailed(error));
  }
}

export function* getAllOrganizerReports(action: AnyAction): Generator {
  try {
    const data : any = yield call(getOrganizerReports, action.data);
    yield put(actions.onGetAllOrganizerReportsSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllOrganizerReportsFailed(error));
  }
}

export function* watchUsers(): Generator {
  yield all([
    takeLatest(constants.USER_ON_INITIALIZE_REQUESTED, userInitialize),
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.ON_GET_ALL_USERS_REQUESTED, eventsGetAllUsers),
    takeLatest(constants.ON_GET_ALL_ORGANIZERS_REQUESTED, eventsGetAllOrganizers),
    takeLatest(constants.ON_CHANGE_BLOCK_REQUESTED, onChangeBlock),
    takeLatest(constants.ON_GET_REPORTS_BY_ID_REQUESTED, getAllReportsById),
    takeLatest(constants.ON_GET_ALL_ORGANIZER_REPORTS_REQUESTED, getAllOrganizerReports),
  ]);
}
