import { LOGIN, REGISTER, LOGOUT, ASYNC_START, ASYNC_END } from '@constants';

const defaultState = {
  processing: false,
  errors: null
};

export default (state = defaultState, action) => {
  if (action.type === LOGIN || action.type === REGISTER) {
    // 登录注册
    return {
      ...state,
      errors: action.error ? action.payload.errors : null
    };
  }

  if (action.type === ASYNC_START) {
    // 异步开始 获取当前用户
    return {
      ...state,
      processing: true
    };
  }

  if (action.type === ASYNC_END) {
    // 异步结束 获取当前用户
    return {
      ...state,
      processing: false
    };
  }

  return state;
};
