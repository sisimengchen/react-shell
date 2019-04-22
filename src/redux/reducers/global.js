import defaultState from 'redux/defaultState';

export default (state = defaultState.global, action) => {
  if (action.type === 'APP_LOAD') {
    // app启动
    return {
      ...state,
      appInitComplete: true
    };
  }

  return state;
};
