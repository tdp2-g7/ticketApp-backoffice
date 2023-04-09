import { Reducer } from 'redux';
import { IUserDefaultState } from '../../types/user.types';
import * as constants from '../constants/user.constants';

const initialState: IUserDefaultState = {
  loading: false,
  data: null,
  users: [],
};

const userReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.USER_ON_LOGIN_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
      };

    case constants.USER_ON_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };
    case constants.EVENT_ON_GET_ALL_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.EVENT_ON_GET_ALL_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
        users: data,
      };
    case constants.EVENT_ON_GET_ALL_USERS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
