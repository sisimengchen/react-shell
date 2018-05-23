import { combineReducers } from 'redux';
import shellReducer from './shell';
import userReducer from './user';
import pageReducer from './page';

export default combineReducers({
  shellState: shellReducer,
  userState: userReducer,
  pageState: pageReducer
});
