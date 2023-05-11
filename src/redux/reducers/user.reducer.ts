import { Reducer } from 'redux';
import { IUserDefaultState } from '../../types/user.types';
import * as constants from '../constants/user.constants';

const initialState: IUserDefaultState = {
  loading: false,
  data: null,
  users: [],
  administrator: null,
  reports: [],
};

const userReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
    case constants.USER_ON_INITIALIZE_REQUESTED:
    case constants.ON_GET_ALL_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_REPORTS_BY_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.USER_ON_LOGIN_SUCCEEDED:
    case constants.USER_ON_INITIALIZE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        administrator: data,
      };

    case constants.ON_GET_ALL_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
        users: data.users,
      };
    case constants.ON_GET_REPORTS_BY_ID_SUCCEEDED:
      return {
        ...state,
        loading: false,
        reports: data,
      };
    case constants.USER_ON_LOGIN_FAILED:
    case constants.USER_ON_INITIALIZE_FAILED:
    case constants.ON_GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case constants.ON_GET_REPORTS_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
