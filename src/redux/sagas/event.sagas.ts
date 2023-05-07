import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { getEvents } from '../../services/event.services';
import * as actions from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* getAllEvents(): Generator {
  try {
    const data : any = yield call(getEvents);
    yield put(actions.onGetAllOrganizersSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllOrganizersFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_GET_ALL_EVENTS_REQUESTED, getAllEvents),
  ]);
}
