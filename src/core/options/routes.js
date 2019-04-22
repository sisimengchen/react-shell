/* eslint-disable no-unused-vars */
import React from 'react';
import Loadable from 'react-loadable';
import { Instagram } from 'react-content-loader';
import BaseLayout from 'layouts/BaseLayout';

const getComponent = loader => ({
  loader: loader,
  loading: Instagram
});

export const routes = [
  {
    path: '/',
    title: '首页',
    layout: BaseLayout,
    component: Loadable(getComponent(() => import(/* webpackChunkName: "HomePage" */ 'pages/Home')))
  },
  {
    path: '/sign/test',
    title: '测试页',
    layout: BaseLayout,
    authority: ['boss'],
    component: Loadable(getComponent(() => import(/* webpackChunkName: "TestPage" */ 'pages/Test')))
  },
  {
    path: '/sign/test2',
    title: '测试页2',
    layout: BaseLayout,
    authority: ['bosss'],
    component: Loadable(getComponent(() => import(/* webpackChunkName: "TestPage2" */ 'pages/Test2')))
  },
  {
    path: '/signin',
    title: '登录页',
    layout: BaseLayout,
    component: Loadable(getComponent(() => import(/* webpackChunkName: "LoginPage" */ 'pages/Login')))
  },
  {
    path: '/forbidden',
    title: '禁止访问',
    layout: BaseLayout,
    component: require('core/Error/403').default
  },
  {
    path: '*',
    title: '抱歉，您访问的页面不存在！',
    component: require('core/Error/404').default
  }
];
