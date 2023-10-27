import React from 'react';
import styled from '@emotion/styled';

import SafeFrame from '~/components/SafeFrame';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.footer`
  width: 100%;
  background-color: lime;
  min-height: 200px;
`;

const Inner = styled(SafeFrame)``;

const Footer: React.ForwardRefRenderFunction<HTMLDivElement, FooterProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <Inner>Footer</Inner>
    </Container>
  );
};

export default React.forwardRef(Footer);
