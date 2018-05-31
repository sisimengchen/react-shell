import { UI_BUSY, UI_OVERLAY } from '@constants';

const defaultState = {
  busy: false,
  isOverlay: false
};

export default (state = defaultState, action) => {
  if (action.type === UI_BUSY) {
    // 顶部加载条
    return {
      ...state,
      busy: action.payload
    };
  }

  if (action.type === UI_OVERLAY) {
    // 导航 遮罩
    return {
      ...state,
      isOverlay: action.payload
    };
  }

  return state;
};
