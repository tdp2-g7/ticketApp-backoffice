import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/event.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loadingEvent: false,
  events: [],
  data: null,
  eventBlock: false,
  reports: [],
  event: null,
  graphicsWithoutFinishDate: null,
  graphicsAccreditedClients: null,
  graphicsFullInterval: null,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_GET_ALL_EVENT_REPORTS_REQUESTED:
    case constants.ON_GET_EVENTS_FILTERED_BY_REQUESTED:
    case constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_REQUESTED:
    case constants.ON_GET_EVENT_REPORTS_BY_ID_REQUESTED:
    case constants.ON_GET_METRICS_ACCREDITED_CLIENTS_REQUESTED:
    case constants.ON_GET_METRICS_FULL_INTERVAL_REQUESTED:
      return {
        ...state,
        loadingEvent: true,
      };
    case constants.ON_CHANGE_BLOCK_EVENT_REQUESTED:
      return {
        ...state,
        loadingEvent: false,
      };
    case constants.ON_GET_METRICS_WITHOUT_FINISH_DATE_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        graphicsWithoutFinishDate: data,
      };
    case constants.ON_GET_METRICS_ACCREDITED_CLIENTS_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        graphicsAccreditedClients: data,
      };
    case constants.ON_GET_METRICS_FULL_INTERVAL_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        graphicsFullInterval: data,
      };
    case constants.ON_GET_ALL_EVENT_REPORTS_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        reports: data.reports,
      };
    case constants.ON_GET_EVENTS_FILTERED_BY_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        events: data.events,
        eventBlock: false,
      };
    case constants.ON_CHANGE_BLOCK_EVENT_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        eventBlock: true,
      };
    case constants.ON_GET_EVENT_REPORTS_BY_ID_SUCCEEDED:
      return {
        ...state,
        loadingEvent: false,
        reports: data.reports,
        event: data.event,
      };
    case constants.ON_GET_EVENTS_FILTERED_BY_FAILED:
    case constants.ON_GET_ALL_EVENT_REPORTS_FAILED:
    case constants.ON_CHANGE_BLOCK_EVENT_FAILED:
    case constants.ON_GET_EVENT_REPORTS_BY_ID_FAILED:
    case constants.ON_GET_METRICS_ACCREDITED_CLIENTS_FAILED:
    case constants.ON_GET_METRICS_FULL_INTERVAL_FAILED:
      return {
        ...state,
        loadingEvent: false,
      };
    default:
      return state;
  }
};

export default eventReducer;
