import React from 'react';
import styled from '@emotion/styled';
import H2 from '@via-profit/ui-kit/Typography/H2';

import { HeadingProps, HeadingStyleProps } from '~/components/Heading1';

type Props = HeadingProps & {
  readonly italic?: boolean;
};

const Heading2 = styled(H2)<HeadingStyleProps>`
  margin: 1em 0;
  font-size: 2em;
  font-weight: 800;
  font-style: ${({ $italic }) => $italic};
`;

const Heading: React.ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {
  const { children, italic, ...otherProps } = props;

  return (
    <Heading2 {...otherProps} ref={ref} $italic={italic ? 'italic' : 'normal'}>
      {children}
    </Heading2>
  );
};

export default React.forwardRef(Heading);