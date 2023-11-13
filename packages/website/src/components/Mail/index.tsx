import React from 'react';
import styled from '@emotion/styled';

type MailProps = React.HTMLAttributes<HTMLAnchorElement>;

const MailContainer = styled.a`
  color: ${({ theme }) => theme.color.accentSecondary.toString()};
  text-decoration: none;
`;

const Mail: React.ForwardRefRenderFunction<HTMLAnchorElement, MailProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <MailContainer href="mail:info@ymrc.ru" {...otherProps} ref={ref}>
      info@ymrc.ru
    </MailContainer>
  );
};

export default React.forwardRef(Mail);
