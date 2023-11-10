import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const MenuLink = styled(Link)`
  padding: 0.4em;
  display: inline-block;
  color: ${({ theme }) => theme.color.textPrimary.toString()};
  text-decoration: none;
`;

const AppMenu: React.FC = () => {
  return (
    <>
      <MenuContainer>
        <MenuLink to="/">О центре</MenuLink>
        <MenuLink to="/">Деятельность</MenuLink>
        <MenuLink to="/">Конференции</MenuLink>
        <MenuLink to="/">Услуги</MenuLink>
        <MenuLink to="/">ОСМУиС</MenuLink>
        <MenuLink to="/">Контакты</MenuLink>
        {/* <MenuLink to="/404">404</MenuLink> */}
      </MenuContainer>
    </>
  );
};

export default AppMenu;
