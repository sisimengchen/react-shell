export function setHeader(payload) {
  return {
    type: 'PAGE/SET_HEADER',
    payload: payload
  };
}

export function setHeaderTitle(title = '') {
  return {
    type: 'PAGE/SET_HEADER_TITLE',
    payload: title
  };
}

export function setHeaderShow(isShow = false) {
  return {
    type: 'PAGE/SET_HEADER_TITLE',
    payload: isShow
  };
}

export function setNavigatorShow(isShow = false) {
  return {
    type: 'PAGE/SET_NAVIGATOR_SHOW',
    payload: isShow
  };
}

export function toggleNavigatorShow() {
  return {
    type: 'PAGE/TOGGLE_NAVIGATOR_SHOW'
  };
}
