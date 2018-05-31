import { UI_BUSY } from '@constants';

const defaultState = {
  busy: false
};

export default (state = defaultState, action) => {
  if (action.type === UI_BUSY) {
    // 顶部加载条
    return {
      ...state,
      busy: action.payload
    };
  }

  return state;
};
