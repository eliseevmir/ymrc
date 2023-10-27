import React from 'react';
import styled from '@emotion/styled';
import H4 from '@via-profit/ui-kit/Typography/H4';

import { HeadingProps, HeadingStyleProps } from '~/components/Heading1';

type Props = HeadingProps & {
  readonly italic?: boolean;
};

const Heading4 = styled(H4)<HeadingStyleProps>`
  font-size: 0.875em;
  font-weight: 600;
  font-style: ${({ $italic }) => $italic};
`;

const Heading: React.ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {
  const { children, italic, ...otherProps } = props;

  return (
    <Heading4 {...otherProps} ref={ref} $italic={italic ? 'italic' : 'normal'}>
      {children}
    </Heading4>
  );
};

export default React.forwardRef(Heading);