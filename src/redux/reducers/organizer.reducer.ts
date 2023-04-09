import { Reducer } from 'redux';
import { IOrganizerDefaultState } from '../../types/user.types';
import * as constants from '../constants/user.constants';

const initialState: IOrganizerDefaultState = {
  loading: false,
  data: null,
  organizers: [],
};

const organizerReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.EVENT_ON_GET_ALL_ORGANIZERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.EVENT_ON_GET_ALL_ORGANIZERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
        organizers: data,
      };
    case constants.EVENT_ON_GET_ALL_ORGANIZERS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default organizerReducer;
