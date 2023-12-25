import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import IconLogoEagle from '~/components/Icons/IconLogoEagle';

type Props = React.HTMLAttributes<HTMLDivElement>;

const StyledLogoEagle = styled(IconLogoEagle)`
  width: 10em;
  height: auto;
  /* font-size: 10em; */
  margin-right: 0.1em;
  outline: 1px solid aqua;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.accentPrimary.toString()};
`;

const Container = styled.div`
  outline: 1px solid red;
  /* display: flex; */
  width: 100%;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 1em 1.5em;
  max-width: 40em;
`;

const Title = styled.span`
  outline: 1px solid purple;
  text-align: center;
  font-size: 1em;
  font-weight: 700;
`;

const HeaderContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <StyledLink to="/">
        <StyledLogoEagle />
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
      </StyledLink>
    </Container>
  );
};

export default React.forwardRef(HeaderContent);
