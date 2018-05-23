import { handleActions } from 'redux-actions';

const defaultState = {
  title: ''
};

const reducer = handleActions(
  {
    // 加
    'PAGE/TITLE': (state, { payload: { title } }) => ({
      ...state,
      title: title
    })
  },
  defaultState
);

export default reducer;
