import { APP_LOAD, LOGIN, LOGOUT, REGISTER } from '@constants';
import { getToken, setToken } from '../../agent';

const defaultState = {
  token: getToken(),
  appLoaded: false
};

export default (state = defaultState, action) => {
  if (action.type === APP_LOAD) {
    // app启动
    return {
      ...state,
      appLoaded: true,
      currentUser: action.payload
    };
  }

  if (action.type === LOGIN || action.type === REGISTER) {
    // 登录注册 置换token和currentUser
    setToken(action.payload.token);
    return {
      ...state,
      token: action.payload.token,
      currentUser: null
    };
  }

  if (action.type === LOGOUT) {
    // 退出登录 清空token和currentUser
    setToken(null);
    return {
      ...state,
      token: null,
      currentUser: null
    };
  }

  return state;
};
