import defaultState from 'redux/defaultState';

export default (state = defaultState.global, action) => {
  if (action.type === 'ASYNC_START') {
    // 异步开始
    return {
      ...state,
      loadding: true
    };
  }

  if (action.type === 'ASYNC_END') {
    // 异步结束
    return {
      ...state,
      loadding: false
    };
  }

  if (action.type === 'APP_LOAD') {
    // app启动
    return {
      ...state,
      appInitComplete: true
    };
  }

  return state;
};
