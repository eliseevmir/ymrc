import React from 'react';
import styled from '@emotion/styled';

type TelProps = React.HTMLAttributes<HTMLAnchorElement>;

const TelContainer = styled.a`
  color: ${({ theme }) => theme.color.accentSecondary.toString()};
  text-decoration: none;
`;

const Telephone: React.ForwardRefRenderFunction<HTMLAnchorElement, TelProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <TelContainer href="tel:+7(343)253-14-73" {...otherProps} ref={ref}>
      +7(343)253-14-73
    </TelContainer>
  );
};

export default React.forwardRef(Telephone);
