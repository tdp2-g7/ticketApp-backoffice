import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onGetAllEvents(): AnyAction {
  return { type: constants.ON_GET_ALL_EVENTS_REQUESTED };
}

export const onGetEventsFilteredBySucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_EVENTS_FILTERED_BY_SUCCEEDED,
  data,
});

export const onGetAllEventsFailed = (error: unknown): AnyAction => (
  { type: constants.ON_GET_ALL_EVENTS_FAILED, error });

export function onGetReportsById(data: any): AnyAction {
  return { type: constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED, data };
}

export const onGetReportsByIdSucceeded = (data: unknown): AnyAction => (
  { type: constants.ON_GET_EVENT_REPORTS_BY_ID_SUCCEEDED, data });

export const onGetReportsByIdFailed = (error: unknown): AnyAction => (
  { type: constants.ON_GET_EVENT_REPORTS_BY_ID_FAILED, error });
