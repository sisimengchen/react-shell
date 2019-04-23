import { combineReducers } from 'redux';
import global from './global';
import currentUser from './currentUser';
import ui from './ui';
import data from './data';

export default combineReducers({
  global,
  currentUser,
  ui,
  data
});
