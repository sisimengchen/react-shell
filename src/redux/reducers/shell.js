import { SHELL_INCREMENT, SHELL_DECREMENT } from '@constants';

const defaultState = {
  counter: 0
};

export default (state = defaultState, action) => {
  if (action.type === SHELL_INCREMENT) {
    // 加
    return {
      ...state,
      counter: state.counter + action.payload
    };
  }

  if (action.type === SHELL_DECREMENT) {
    // 减
    return {
      ...state,
      counter: state.counter - action.payload
    };
  }

  return state;
};
