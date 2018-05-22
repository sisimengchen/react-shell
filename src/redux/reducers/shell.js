import { handleActions } from 'redux-actions';

const defaultState = {
  counter: 0
};

const reducer = handleActions(
  {
    // 加
    'SHELL/INCREMENT': (state, { payload: { amount } }) => ({
      ...state,
      counter: state.counter + amount
    }),
    // 减
    'SHELL/DECREMENT': (state, { payload: { amount } }) => ({
      ...state,
      counter: state.counter - amount
    })
  },
  defaultState
);

export default reducer;
