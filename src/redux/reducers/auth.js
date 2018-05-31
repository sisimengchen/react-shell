import { LOGIN, REGISTER, LOGOUT, ASYNC_START, ASYNC_END } from '@constants';

const defaultState = {
  processing: false
};

export default (state = defaultState, action) => {
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
