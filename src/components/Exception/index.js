/**
 * @file 异常页面组件
 * @author mengchen <sisimengchen@gmail.com>
 */
import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div `
  position: relative;
  height: 100%;
`;

const ImgBlock = styled.div `
  flex: 2;
`;

const Img = styled.div `
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

const ContentBlock = styled.div `
  flex: 1;
`;

export default ({ type, title, desc, img, actions, ...rest }) => {
  const pageType = type in config ? type : '404';
  return (
    <Wrapper {...rest}>
      <ImgBlock>
        <Img style={{ backgroundImage: `url(${img || config[pageType].img})` }} />
      </ImgBlock>
      <ContentBlock>ss</ContentBlock>
    </Wrapper>
  );
};
