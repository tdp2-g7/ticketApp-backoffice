import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { changeBlockEvent, getEventsFilteredBy } from '../../services/event.services';
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

export function* onChangeBlockEvent(action: AnyAction): Generator {
  try {
    const { data } : any = yield call(changeBlockEvent, action.data);
    yield put(actions.onChangeBlockEventBySucceeded(data));
  } catch (error) {
    yield put(actions.onChangeBlockEventByFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED, onGetEventsFilteredBy),
    takeLatest(constants.ON_CHANGE_BLOCK_EVENT_REQUESTED, onChangeBlockEvent),
  ]);
}
