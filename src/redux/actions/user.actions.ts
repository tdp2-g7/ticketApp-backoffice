import { AnyAction } from 'redux';
import { ILoginFormData } from '../../views/Login/types';
import * as constants from '../constants/user.constants';

export function onInitialize(formData: ILoginFormData): AnyAction {
  return {
    type: constants.USER_ON_INITIALIZE_REQUESTED,
    formData,
  };
}

export function onInitializeSucceeded(data: unknown): AnyAction {
  return {
    type: constants.USER_ON_INITIALIZE_SUCCEEDED,
    data,
  };
}

export function onInitializeFailed(error: unknown): AnyAction {
  return {
    type: constants.USER_ON_INITIALIZE_FAILED,
    error,
  };
}

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

// onLogout
export function onLogout(): AnyAction {
  return {
    type: constants.USER_ON_LOGOUT,
  };
}

export function onChangeBlockRequested(organizerId: string): AnyAction {
  return {
    type: constants.ON_CHANGE_BLOCK_REQUESTED,
    organizerId,
  };
}

export function onChangeBlockSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_CHANGE_BLOCK_SUCCEEDED,
    data,
  };
}

export function onChangeBlockFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_CHANGE_BLOCK_FAILED,
    error,
  };
}

export const onGetAllUsers = (): AnyAction => ({
  type: constants.ON_GET_ALL_USERS_REQUESTED,
});

export const onGetAllUsersSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_USERS_SUCCEEDED,
  data,
});

export const onGetAllUsersFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_USERS_FAILED,
  error,
});

export const onGetAllOrganizers = (): AnyAction => ({
  type: constants.ON_GET_ALL_ORGANIZERS_REQUESTED,
});

export const onGetAllOrganizersSucceeded = (data: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_ORGANIZERS_SUCCEEDED,
  data,
});

export const onGetAllOrganizersFailed = (error: unknown): AnyAction => ({
  type: constants.ON_GET_ALL_ORGANIZERS_FAILED,
  error,
});

export function onGetReportsById(data: any): AnyAction {
  return { type: constants.ON_GET_REPORTS_BY_ID_REQUESTED, data };
}

export const onGetReportsByIdSucceeded = (data: unknown): AnyAction => (
  { type: constants.ON_GET_REPORTS_BY_ID_SUCCEEDED, data });

export const onGetReportsByIdFailed = (error: unknown): AnyAction => (
  { type: constants.ON_GET_REPORTS_BY_ID_FAILED, error });
