import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/user';

const reducers = combineReducers({
  userState: userReducer
});

const store = createStore(reducers);

export default store;
