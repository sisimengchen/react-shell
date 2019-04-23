import { setToken } from 'utils/token';
import { User } from 'utils/user';
import { request } from 'utils/request';

export const signin = (data = {}) => request.post({ url: '/api/login', data }).then((data = {}) => {
  setToken(data.token);
  return User.get(true);
});

export const register = (data = {}) => request.post({ url: '/api/register', data }).then((data = {}) => {
  setToken(data.token);
  return User.get(true);
});

export const signout = () => request.post({ url: '/api/logout' }).then(() => setToken(null));
