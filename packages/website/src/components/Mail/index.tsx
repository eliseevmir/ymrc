import React from 'react';
import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

type MailProps = React.HTMLAttributes<HTMLAnchorElement>;

const MailContainer = styled.a`
  color: ${({ theme }) => theme.color.textSecondary.toString()};
  text-decoration: none;
`;

const Mail: React.ForwardRefRenderFunction<HTMLAnchorElement, MailProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <MailContainer href="mail:info@ymrc.ru" {...otherProps} ref={ref}>
      <FormattedMessage defaultMessage="info@ymrc.ru" />
    </MailContainer>
  );
};

export default React.forwardRef(Mail);
