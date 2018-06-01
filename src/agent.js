import { request } from '@utils';

// 登录标识
let token = window.localStorage.getItem('token') || null;

export const setToken = (_token) => {
  token = _token;
  token ? window.localStorage.setItem('token', token) : window.localStorage.removeItem('token');
};

export const getToken = () => token;

export const Auth = {
  current: () => request('/api/user'),
  login: (email, password) => request('/api/login', { method: 'POST', body: { email, password } })
    .then((json) => {
      setToken(json.token);
      return Auth.current();
    })
    .then((json) => {
      json.token = token;
      return json;
    }),
  register: (username, email, password) => request('/api/register', { method: 'POST', body: { username, email, password } })
    .then((json) => {
      setToken(json.token);
      return Auth.current();
    })
    .then((json) => {
      json.token = token;
      return json;
    }),
  logout: () => request('/api/logout', { method: 'POST' })
};
