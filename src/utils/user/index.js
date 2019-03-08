import { request } from 'utils/request';

export const User = {
  userData: undefined,
  promise: undefined,
  hasLogin: false, // 只能证明用户在某段时间登陆成功过
  url: '/api/user',
  get: function(force = false, options = {}) {
    if (!force && this.promise) {
      return this.promise;
    }
    force && (this.promise = undefined);
    if (!this.promise) {
      this.promise = request
        .get({
          url: this.url,
          options: {
            report: true,
            unloginOpen: false,
            ...options
          }
        })
        .then((data = {}) => this.onSuccess(data))
        .catch((res) => {
          this.reset();
          throw res;
        });
    }
    return this.promise;
  },
  getSync: function() {
    return this.userData;
  },
  onSuccess: function(data) {
    this.userData = this._formate(data);
    this.hasLogin = true;
    return data;
  },
  _formate: function(data) {
    return data;
  },
  reset: function() {
    this.userData = undefined;
    this.hasLogin = false;
  },
  isAuthority: function(denyAuthors = [], allowAuthors = [], strict = true) {
    if (!this.rolesMap) {
      return !strict;
    }
    const { rolesMap = {} } = this;
    const denyLength = denyAuthors.length;
    if (denyLength) {
      for (let i = 0; i < denyLength; i++) {
        // 只要有一个属于则拒绝
        if (rolesMap[`${denyAuthors[i]}`]) {
          return false;
        }
      }
    }
    const allowLength = allowAuthors.length;
    if (allowLength) {
      for (let j = 0; j < allowLength; j++) {
        // 只要有一个属于则同意
        if (rolesMap[`${allowAuthors[j]}`]) {
          return true;
        }
      }
    }
    return !strict;
  },
  logout: function() {
    window.location.href = '/logout';
  }
};
