/**
 * @file 权限标识
 * @author mengchen <sisimengchen@gmail.com>
 */

export function getAuthority() {
  let authority = [];
  try {
    const authorityString = localStorage.getItem('authority');
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = ['admin'];
  }
  return authority;
}

export function setAuthority(authority) {
  return localStorage.setItem('authority', JSON.stringify(authority));
}
