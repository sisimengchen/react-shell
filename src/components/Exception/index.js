/**
 * @file 异常页面组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React from 'react';
import styled from 'styled-components';

import './index.scss';

const config = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403',
    desc: '抱歉，你无权访问该页面'
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404',
    desc: '抱歉，你访问的页面不存在'
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500',
    desc: '抱歉，服务器出错了'
  }
};

export default ({ type, title, desc, img, actions, ...rest }) => {
  const pageType = type in config ? type : '404';
  return (
    <div id="exception" {...rest}>
      <div className="image-block">
        <img src={img || config[pageType].img} />
      </div>
      <div className="content-block">
        <h1>{title || config[pageType].title}</h1>
        <div className="desc">{desc || config[pageType].desc}</div>
      </div>
    </div>
  );
};
