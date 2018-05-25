import { handleActions } from 'redux-actions';

const defaultState = {
  header: {
    isShow: true
  },
  navigator: {
    isShow: false
  },
  footer: {
    isShow: true
  }
};

const reducer = handleActions(
  {
    'PAGE/SET_HEADER_SHOW': (state, { payload }) => ({
      ...state,
      header: {
        isShow: payload
      }
    }),
    'PAGE/SET_NAVIGATOR_SHOW': (state, { payload }) => ({
      ...state,
      navigator: {
        isShow: payload
      }
    }),
    'PAGE/TOGGLE_NAVIGATOR_SHOW': state => ({
      ...state,
      navigator: {
        isShow: !state.navigator.isShow
      }
    })
  },
  defaultState
);

export default reducer;
