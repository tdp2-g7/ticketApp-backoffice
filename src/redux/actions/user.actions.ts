import { AnyAction } from 'redux';
import { ILoginFormData } from '../../views/Login/types';
import * as constants from '../constants/user.constants';

export function onLoginRequested(formData: ILoginFormData): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_REQUESTED,
    formData,
  };
}

export function onLoginSucceeded(data: unknown): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_SUCCEEDED,
    data,
  };
}

export function onLoginFailed(error: unknown): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_FAILED,
    error,
  };
}

export const onGetAllUsers = (): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_USERS_REQUESTED });

export const onGetAllUsersSucceeded = (data: unknown): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_USERS_SUCCEEDED, data });

export const onGetAllUsersFailed = (error: unknown): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_USERS_FAILED, error });

export const onGetAllOrganizers = (): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_ORGANIZERS_REQUESTED });

export const onGetAllOrganizersSucceeded = (data: unknown): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_ORGANIZERS_SUCCEEDED, data });

export const onGetAllOrganizersFailed = (error: unknown): AnyAction => (
  { type: constants.EVENT_ON_GET_ALL_ORGANIZERS_FAILED, error });
