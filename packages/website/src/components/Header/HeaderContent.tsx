import React from 'react';
import styled from '@emotion/styled';
import { Link, useMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ButtonBlack from '~/components/ButtonBlack';
import ButtonOutlined from '~/components/ButtonOutlined';
import Heading1 from '~/components/Heading1';
import IconLogoEagle from '~/components/Icons/IconLogoEagle';

type Props = React.HTMLAttributes<HTMLDivElement>;

const StyledLogoEagle = styled(IconLogoEagle)`
  width: 5em;
  height: auto;
  margin-right: 0.5em;
`;

const Container = styled.div`
  outline: 1px solid red;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.5em;
  max-width: 40em;
`;

const Title = styled(Heading1)`
  outline: 1px solid purple;
  text-align: center;
  font-size: 1em;
`;

const HeaderContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <Link to="/">
        <StyledLogoEagle />
      </Link>
      <Title>
        <FormattedMessage
          defaultMessage="ФБУН «Екатеринбургский Медицинский Научный Центр профилактики и охраны здоровья рабочих
        промпредприятий»"
        />
      </Title>
      {/* <Link to={'http://localhost:9001/'} target="_blank">
        Enter crm
      </Link> */}
      {/* <Link to={'http://localhost:9000/'} target="_blank">
        Enter admin
      </Link> */}
      {/* <ButtonBlack type="button" color="secondary">
        Войти
      </ButtonBlack> */}
      {/* <ButtonOutlined type="button" color="secondary">
        Регистрация
      </ButtonOutlined> */}
    </Container>
  );
};

export default React.forwardRef(HeaderContent);
