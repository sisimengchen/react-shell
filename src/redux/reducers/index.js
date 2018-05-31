import { combineReducers } from 'redux';
import common from './common';
import ui from './ui';
import auth from './auth';
import shell from './shell';

export default combineReducers({
  common,
  ui,
  auth,
  shell
});
