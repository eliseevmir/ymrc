import * as React from 'react';
import styled from '@emotion/styled';

import HeaderTitlebar from '~/components/Header/HeaderTitlebar';
import HeaderToolbar from '~/components/Header/HeaderToolbar';

const HeaderContainer = styled.header`
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ theme }) => theme.color.surface.toString()};
  position: fixed;
  height: 3rem;
  overflow-y: hidden;
  left: 13rem;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const HeaderInner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

type Props = React.HTMLAttributes<HTMLDivElement>;

const Header: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => (
  <HeaderContainer {...props} ref={ref}>
    <HeaderInner>
      <HeaderTitlebar />
      <HeaderToolbar />
    </HeaderInner>
  </HeaderContainer>
);

export default React.forwardRef(Header);
