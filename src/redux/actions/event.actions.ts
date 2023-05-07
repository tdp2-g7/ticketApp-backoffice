import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onGetAllEvents(data: any): AnyAction {
  return { type: constants.ON_GET_ALL_EVENTS_REQUESTED, data };
}

export const onGetAllOrganizersSucceeded = (data: unknown): AnyAction => (
  { type: constants.ON_GET_ALL_EVENTS_SUCCEEDED, data });

export const onGetAllOrganizersFailed = (error: unknown): AnyAction => (
  { type: constants.ON_GET_ALL_EVENTS_FAILED, error });
