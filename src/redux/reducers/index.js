import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';

export default combineReducers({
  global,
  currentUser
});
