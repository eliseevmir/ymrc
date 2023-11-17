import React from 'react';
import styled from '@emotion/styled';
import H1 from '@via-profit/ui-kit/Typography/H1';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export type HeadingStyleProps = {
  readonly $italic?: 'italic' | 'normal';
};

const Heading1 = styled(H1)<HeadingProps>`
  font-size: 1.5em;
  font-weight: 800;
`;

const Heading: React.ForwardRefRenderFunction<HTMLHeadingElement, HeadingProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Heading1 {...otherProps} ref={ref}>
      {children}
    </Heading1>
  );
};

export default React.forwardRef(Heading);
