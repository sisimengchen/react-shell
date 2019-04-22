import { getToken } from 'utils/token';

export default {
  global: {
    token: getToken(),
    appInitComplete: false // 当前应用是否已经初始化完成
  },
  currentUser: {
    authority: []
  },
  ui: {
    loadding: false // 当前是否有异步请求处理
  }
};
