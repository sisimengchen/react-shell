import Loadable from 'react-loadable';
import { Instagram } from 'react-content-loader';

const getComponent = loader => ({
  loader: loader,
  loading: Instagram
});

const BaseLayout = Loadable(getComponent(() => import(/* webpackChunkName: "BaseLayout" */ 'layouts/BaseLayout')));

export const routes = [
  {
    path: '/',
    title: '首页',
    layout: BaseLayout,
    component: Loadable(getComponent(() => import(/* webpackChunkName: "HomePage" */ 'pages/Home')))
  },
  {
    path: '/test',
    title: '测试页',
    layout: BaseLayout,
    component: Loadable(getComponent(() => import(/* webpackChunkName: "TestPage" */ 'pages/Test')))
  },
  {
    path: '/login',
    title: '登录页',
    layout: BaseLayout,
    component: Loadable(getComponent(() => import(/* webpackChunkName: "LoginPage" */ 'pages/Login')))
  },
  {
    path: '*',
    title: '抱歉，您访问的页面不存在！',
    component: require('pages/NoMatch').default
  }
];
