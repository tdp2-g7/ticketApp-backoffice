import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onGetAllEventReports(data: any): AnyAction {
  return { type: constants.ON_GET_ALL_EVENT_REPORTS_REQUESTED, data };
}

export const onGetAllEventReportsSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_EVENT_REPORTS_SUCCEEDED,
  data,
});

export const onGetAllEventReportsFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_EVENT_REPORTS_FAILED,
  error,
});

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

export function onGetMetricsWithoutFinishDateRequested(): AnyAction {
  return { type: constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_REQUESTED };
}

export const onGetMetricsWithoutFinishDateSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_SUCCEEDED,
  data,
});

export const onGetMetricsWithoutFinishDateFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_FAILED,
  error,
});
