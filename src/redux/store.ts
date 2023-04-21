import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
import redirectMiddleware from './middlewares/redirect.middleware';
import storageMiddleware from './middlewares/storage.middleware';

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line max-len
export const composeEnhancers = (window && (window as any).REDUX_DEVTOOLS_EXTENSION_COMPOSE) || compose;
const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      redirectMiddleware,
      storageMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
