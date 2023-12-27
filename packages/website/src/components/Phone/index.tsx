import React from 'react';
import styled from '@emotion/styled';

import { templates, usePhoneUtils } from '~/components/PhoneField';

type TelProps = React.HTMLAttributes<HTMLAnchorElement>;

const PhoneContainer = styled.a`
  color: ${({ theme }) => theme.color.textSecondary.toString()};
  text-decoration: none;
`;

const Phone: React.ForwardRefRenderFunction<HTMLAnchorElement, TelProps> = (props, ref) => {
  const { children, ...otherProps } = props;
  const { parseAndFormat } = usePhoneUtils({ templates });

  return (
    <PhoneContainer href="tel:+73432531473" {...otherProps} ref={ref}>
      {parseAndFormat(`+73432531473`).text}
    </PhoneContainer>
  );
};

export default React.forwardRef(Phone);
