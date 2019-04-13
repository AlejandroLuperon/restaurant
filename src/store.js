import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducer';

const logger = createLogger({
  timestamps: true,
  duration: true,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga);

export default store;
