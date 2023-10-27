import React from 'react';
import styled from '@emotion/styled';
import H3 from '@via-profit/ui-kit/Typography/H3';

import { HeadingProps, HeadingStyleProps } from '~/components/Heading1';

type Props = HeadingProps & {
  readonly italic?: boolean;
};

const Heading3 = styled(H3)<HeadingStyleProps>`
  margin: 1.125em 0;
  font-size: 1em;
  font-weight: 800;
  line-height: 1.375em;
  font-style: ${({ $italic }) => $italic};
  color: ${({ theme }) => theme.color.accentPrimary.toString()};
`;

const Heading: React.ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {
  const { children, italic, ...otherProps } = props;

  return (
    <Heading3 {...otherProps} ref={ref} $italic={italic ? 'italic' : 'normal'}>
      {children}
    </Heading3>
  );
};

export default React.forwardRef(Heading);
