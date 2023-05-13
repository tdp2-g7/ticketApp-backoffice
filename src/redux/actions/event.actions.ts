import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onGetEventsFilteredBy(data: any): AnyAction {
  return { type: constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED, data };
}

export const onGetEventsFilteredBySucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_EVENTS_FILTERED_BY_SUCCEEDED,
  data,
});

export const onGetEventsFilteredByFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_EVENTS_FILTERED_BY_FAILED,
  error,
});

export function onChangeBlockEventRequested(data: any): AnyAction {
  return { type: constants.ON_CHANGE_BLOCK_EVENT_REQUESTED, data };
}

export const onChangeBlockEventBySucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_CHANGE_BLOCK_EVENT_SUCCEEDED,
  data,
});

export const onChangeBlockEventByFailed = (error: unknown): AnyAction => ({
  type: constants.ON_CHANGE_BLOCK_EVENT_FAILED,
  error,
});

export function onGetReportsById(data: any): AnyAction {
  return { type: constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED, data };
}

export const onGetReportsByIdSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_EVENT_REPORTS_BY_ID_SUCCEEDED,
  data,
});

export const onGetReportsByIdFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_EVENT_REPORTS_BY_ID_FAILED,
  error,
});
