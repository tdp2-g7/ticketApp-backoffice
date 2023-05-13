import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/event.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  events: [],
  data: null,
  eventBlock: false,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED:
    case constants.ON_CHANGE_BLOCK_EVENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_EVENTS_FILTERED_BY_SUCCEEDED:
      return {
        ...state,
        loading: false,
        events: data.events,
        eventBlock: false,
      };
    case constants.ON_CHANGE_BLOCK_EVENT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        eventBlock: true,
      };
    case constants.ON_GET_EVENTS_FILTERED_BY_FAILED:
    case constants.ON_CHANGE_BLOCK_EVENT_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
