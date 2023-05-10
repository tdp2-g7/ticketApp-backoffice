import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/event.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  events: [],
  data: null,
  reports: [],
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_GET_ALL_EVENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_REPORTS_BY_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_ALL_EVENTS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        events: data.events,
      };
    case constants.ON_GET_REPORTS_BY_ID_SUCCEEDED:
      return {
        ...state,
        loading: false,
        reports: data,
      };
    case constants.ON_GET_ALL_EVENTS_FAILED:
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

export default eventReducer;
