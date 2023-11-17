import React from 'react';
import styled from '@emotion/styled';
import { Link, useMatch } from 'react-router-dom';

import ButtonBlack from '~/components/ButtonBlack';
import ButtonOutlined from '~/components/ButtonOutlined';
import Heading1 from '~/components/Heading1';
import IconLogoEagle from '~/components/Icons/IconLogoEagle';

type Props = React.HTMLAttributes<HTMLDivElement>;

const LogoEagle = styled(IconLogoEagle)`
  width: 10em;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Title = styled(Heading1)`
  text-align: center;
`;

const HeaderContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <LogoEagle />
      <Title>
        ФБУН «Екатеринбургский Медицинский Научный Центр профилактики и охраны здоровья рабочих
        промпредприятий»
      </Title>
      <Link to={'http://localhost:9001/'} target="_blank">
        Enter crm
      </Link>
      {/* <Link to={'http://localhost:9000/'} target="_blank">
        Enter admin
      </Link> */}
      {/* <ButtonBlack type="button" color="secondary">
        Войти
      </ButtonBlack> */}
      <ButtonOutlined type="button" color="secondary">
        Регистрация
      </ButtonOutlined>
    </Container>
  );
};

export default React.forwardRef(HeaderContent);
