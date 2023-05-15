import { Reducer } from 'redux';
import { IOrganizerDefaultState } from '../../types/user.types';
import * as constants from '../constants/user.constants';

const initialState: IOrganizerDefaultState = {
  loading: false,
  data: null,
  organizers: [],
  organizerBlock: false,
};

const organizerReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_GET_ALL_ORGANIZERS_REQUESTED:
    case constants.ON_CHANGE_BLOCK_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_ALL_ORGANIZERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        organizers: data,
        organizerBlock: false,
      };
    case constants.ON_CHANGE_BLOCK_SUCCEEDED:
      return {
        ...state,
        loading: false,
        organizerBlock: true,
      };
    case constants.ON_GET_ALL_ORGANIZERS_FAILED:
    case constants.ON_CHANGE_BLOCK_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default organizerReducer;
