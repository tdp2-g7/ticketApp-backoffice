import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onGetAllEvents(data: any): AnyAction {
  return { type: constants.ON_GET_ALL_EVENTS_REQUESTED, data };
}

export const onGetAllEventsSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_EVENTS_SUCCEEDED,
  data,
});

export const onGetAllEventsFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_EVENTS_FAILED,
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
