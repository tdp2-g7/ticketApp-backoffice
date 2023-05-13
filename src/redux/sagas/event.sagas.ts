import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { getEventsFilteredBy, getAllReports } from '../../services/event.services';

import * as actions from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* onGetEventsFilteredBy(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getEventsFilteredBy, action.data);
    yield put(actions.onGetEventsFilteredBySucceeded(data));
  } catch (error) {
    yield put(actions.onGetEventsFilteredByFailed(error));
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
    takeLatest(constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED, onGetEventsFilteredBy),
    takeLatest(constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED, getAllReportsById),
  ]);
}
