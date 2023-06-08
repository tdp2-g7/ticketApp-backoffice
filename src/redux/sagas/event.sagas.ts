import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  changeBlockEvent,
  getEventsFilteredBy,
  getAllReports,
  getAllEvents,
  getMetricsWithoutFinishDate,
  getMetricsAccreditedClients,
  getMetricsFullInterval,
} from '../../services/event.services';
import * as actions from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* onGetAllEventReports(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getAllEvents, action.data);
    yield put(actions.onGetAllEventReportsSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllEventReportsFailed(error));
  }
}

export function* onGetEventsFilteredBy(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getEventsFilteredBy, action.data);
    yield put(actions.onGetEventsFilteredBySucceeded(data));
  } catch (error) {
    yield put(actions.onGetEventsFilteredByFailed(error));
  }
}

export function* onChangeBlockEvent(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(changeBlockEvent, action.data);
    yield put(actions.onChangeBlockEventBySucceeded(data));
  } catch (error) {
    yield put(actions.onChangeBlockEventByFailed(error));
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

export function* onGetMetricsWithoutFinishDate(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getMetricsWithoutFinishDate, action.startDate);
    yield put(actions.onGetMetricsWithoutFinishDateSucceeded(data));
  } catch (error) {
    yield put(actions.onGetMetricsWithoutFinishDateFailed(error));
  }
}

export function* onGetMetricsAccreditedClients(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getMetricsAccreditedClients, action.data);
    yield put(actions.onGetMetricsAccreditedClientsSucceeded(data));
  } catch (error) {
    yield put(actions.onGetMetricsAccreditedClientsFailed(error));
  }
}
export function* onGetMetricsFullInterval(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(getMetricsFullInterval, action.data);
    yield put(actions.onGetMetricsFullIntervalSucceeded(data));
  } catch (error) {
    yield put(actions.onGetMetricsFullIntervalFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_GET_ALL_EVENT_REPORTS_REQUESTED, onGetAllEventReports),
    takeLatest(constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED, onGetEventsFilteredBy),
    takeLatest(constants.ON_CHANGE_BLOCK_EVENT_REQUESTED, onChangeBlockEvent),
    takeLatest(constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED, getAllReportsById),
    // eslint-disable-next-line max-len
    takeLatest(constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_REQUESTED, onGetMetricsWithoutFinishDate),
    // eslint-disable-next-line max-len
    takeLatest(constants.ON_GET_METRICS_ACCREDITED_CLIENTS_REQUESTED, onGetMetricsAccreditedClients),
    takeLatest(constants.ON_GET_METRICS_FULL_INTERVAL_REQUESTED, onGetMetricsFullInterval),
  ]);
}
