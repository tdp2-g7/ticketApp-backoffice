import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/event.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  events: [],
  data: null,
  reports: [],
  event: null,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.ON_GET_ALL_EVENTS_SUCCEEDED:
      console.log('&&2', data);
      return {
        ...state,
        loading: false,
        events: data.events,
      };
    case constants.ON_GET_EVENT_REPORTS_BY_ID_SUCCEEDED:
      return {
        ...state,
        loading: false,
        reports: data.reports,
        event: data.event,
      };
    case constants.ON_GET_EVENT_REPORTS_BY_ID_FAILED:
      console.log('POR QUE ESTA ACA');
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
