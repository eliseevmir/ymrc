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
  /* width: 100%; */
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
      </StyledLink>
    </Container>
  );
};

export default React.forwardRef(HeaderContent);
