import React from 'react';
import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';

import SafeFrame from '~/components/SafeFrame';
import HeaderMenu from '~/components/HeaderMenu';
import HeaderContent from '~/components/Header/HeaderContent';
import fragmentSpec, { HeaderFragment$key } from '~/relay/artifacts/HeaderFragment.graphql';


export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly fragmentRef: HeaderFragment$key;
}

const Container = styled.header`
  background-color: ${({ theme }) => theme.color.backgroundPrimary.toString()};
  background-repeat: no-repeat;
  background-size: contain;
  color: ${({ theme }) => theme.color.textPrimary.toString()};
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  outline: 1px solid black;
`;

const Inner = styled(SafeFrame)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  outline: 1px solid lime;
`;

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = (props, ref) => {
  const { fragmentRef, ...otherProps } = props;

  const fragment = useFragment(fragmentSpec, fragmentRef);

  return (
    <Container {...otherProps} ref={ref}>
      <Inner>
        <HeaderContent />
        <HeaderMenu fragmentRef={fragment} />
      </Inner>
    </Container>
  );
};

export default React.forwardRef(Header);

graphql`
  fragment HeaderFragment on PageMenu {
    ...HeaderMenuFragment
  }
`;
