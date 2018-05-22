import { combineReducers } from 'redux';
import shellReducer from './shell';
import userReducer from './user';

export default combineReducers({
  shellState: shellReducer,
  userState: userReducer
});
