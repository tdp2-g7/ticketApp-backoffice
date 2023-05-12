import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { getEvents, getAllReports } from '../../services/event.services';
import * as actions from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* getAllEvents(): Generator {
  try {
    const data : any = yield call(getEvents);
    console.log('&&&', data);
    yield put(actions.onGetAllEventsSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllEventsFailed(error));
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

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_GET_ALL_EVENTS_REQUESTED, getAllEvents),
    takeLatest(constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED, getAllReportsById),
  ]);
}
