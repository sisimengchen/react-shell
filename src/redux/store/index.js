import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '@reducers';
import thunk from 'redux-thunk';
import { promiseMiddleware } from '../middleware';

const middleware = [promiseMiddleware, createLogger()];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
