import React from 'react';
import styled from '@emotion/styled';

import Paragraph from '~/components/Paragraph';
import SafeFrame from '~/components/SafeFrame';
import Phone from '~/components/Phone';
import Mail from '~/components/Mail';
import IconInt from '~/components/Icons/IconInt';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.footer`
  display: flex;
  outline: 1px solid lime;
  background-color: ${({ theme }) => theme.color.accentPrimary.toString()};
  min-height: 10em;
`;

const Inner = styled(SafeFrame)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Adress = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textSecondary.toString()};
`;

const Copyright = styled(Paragraph)`
  color: ${({ theme }) => theme.color.textSecondary.toString()};
`;

/*
 * Подогнать все иконки под один размер viewBox
 */
const StyledIconInt = styled(IconInt)`
  font-size: 3em;
  color: ${({ theme }) => theme.color.textSecondary.toString()};
`;

const Footer: React.ForwardRefRenderFunction<HTMLDivElement, FooterProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <Inner>
        <Contacts>
          <Adress noMargin>г. Екатеринбург, ул. Попова, 30</Adress>
          <Phone />
          <Mail />
          <Copyright noMargin>©2002 – 2023 ФБУН «ЕМНЦ ПОЗРПП»</Copyright>
        </Contacts>
        <div>
          <StyledIconInt />
        </div>
        <div>INFO</div>
      </Inner>
    </Container>
  );
};

export default React.forwardRef(Footer);
