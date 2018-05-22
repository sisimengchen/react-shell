import { request } from '@utils';

export function getUser() {
  return request('/api/user');
}
