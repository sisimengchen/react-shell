import { getUser } from '@services';

function requestUser() {
  return {
    type: 'USER/REQUEST_USER'
  };
}

function getUserSucess(json) {
  return {
    type: 'USER/RECEIVE_USER_SUCESSS',
    payload: json
  };
}

function getUserFail(err) {
  return {
    type: 'USER/RECEIVE_USER_FAIL',
    payload: err,
    error: true
  };
}

export function fetchUser() {
  return (dispatch) => {
    dispatch(requestUser());

    return getUser()
      .then((json) => {
        dispatch(getUserSucess(json));
      })
      .catch((err) => {
        dispatch(getUserFail(err));
      });
  };
}
