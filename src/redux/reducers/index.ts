import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import organizerReducer from './organizer.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  organizer: organizerReducer,
});

export default rootReducer;
