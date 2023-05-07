import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import organizerReducer from './organizer.reducer';
import eventReducer from './event.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  organizer: organizerReducer,
  event: eventReducer,
});

export default rootReducer;
