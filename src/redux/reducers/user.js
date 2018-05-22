const defaultState = {
  isFetched: true,
  isError: false,
  isLogin: false,
  user: undefined
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'USER/REQUEST_USER') {
    // 请求用户信息
    return Object.assign(...state, {
      isFetched: true,
      isError: false
    });
  }

  if (action.type === 'USER/RECEIVE_USER_SUCESSS') {
    // 用户信息获取成功
    const newstate = Object.assign(...state, {
      isFetched: false,
      isError: false,
      isLogin: true,
      user: action.payload
    });
    return newstate;
  }

  if (action.type === 'USER/RECEIVE_USER_FAIL') {
    // 用户信息获取失败
    return Object.assign(...state, {
      isFetched: false,
      isError: true,
      isLogin: false
    });
  }

  return state;
};

export default reducer;
