import React from 'react';
import styled from '@emotion/styled';

import SafeFrame from '~/components/SafeFrame';
import Telephone from '~/components/Telephone';
import Mail from '~/components/Mail';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.footer`
  width: 100%;
  outline: 1px solid lime;
  background-color: ${({ theme }) => theme.color.accentPrimary.toString()};
  min-height: 200px;
`;

const Inner = styled(SafeFrame)`
  display: flex;
  justify-content: space-between;
`;

const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Adress = styled.p`
  color: ${({ theme }) => theme.color.accentSecondary.toString()};
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.color.accentSecondary.toString()};
`;

const Footer: React.ForwardRefRenderFunction<HTMLDivElement, FooterProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <Inner>
        <Contacts>
          <Adress>г. Екатеринбург, ул. Попова, 30</Adress>
          <Telephone />
          <Mail />
          <Copyright>©2002 – 2023 ФБУН «ЕМНЦ ПОЗРПП»</Copyright>
        </Contacts>
        <div>INFO</div>
        <div>INFO</div>
      </Inner>
    </Container>
  );
};

export default React.forwardRef(Footer);
