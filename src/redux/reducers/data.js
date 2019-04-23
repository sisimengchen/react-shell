import defaultState from 'redux/defaultState';

export default (state = defaultState.data, action) => {
  if (action.type === 'ASSIGN_DATA') {
    return {
      ...action.payload
    };
  }

  return state;
};
