import { all } from 'redux-saga/effects';
import { watchUsers } from './user.sagas';
import { watchEvents } from './event.sagas';

export default function* rootSaga(): Generator {
  yield all([
    watchUsers(),
    watchEvents(),
  ]);
}
