import React from 'react';
import styled from '@emotion/styled';

import SafeFrame from '~/components/SafeFrame';

const Container = styled(SafeFrame)`
  background-color: lime;
  width: 100%;
`;

const ListLinks = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
  /* margin: 0 auto; */
`;

const Li = styled.li`
  position: relative;
  &:hover .list {
    color: red;
    outline: 1px solid red;
    display: initial;
  }
`;

const ListInner = styled.ul`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  /* visibility: hidden */
`;

// const

const NavMenu: React.FC = () => {
  return (
    <Container>
      <ListLinks>
        {/* <ul> */}
        <Li>
          <a href="/" style={{ textDecoration: 'none' }}>
            Link One
          </a>
          <ListInner className="list">
            <Li>
              <a href="#">1</a>
            </Li>
            <Li>
              <a href="#">2</a>
            </Li>
            <Li>
              <a href="#">3</a>
            </Li>
            <Li>
              <a href="#">4</a>
            </Li>
          </ListInner>
        </Li>
        <Li>
          <a href="/">Link Two</a>
          <ListInner className="list">
            <Li>
              <a href="#">1</a>
            </Li>
            <Li>
              <a href="#">2</a>
            </Li>
            <Li>
              <a href="#">3</a>
            </Li>
            <Li>
              <a href="#">4</a>
            </Li>
          </ListInner>
        </Li>
        <Li>
          <a href="/">Link Three</a>
          <ListInner className="list">
            <Li>
              <a href="#">1</a>
            </Li>
            <Li>
              <a href="#">2</a>
            </Li>
            <Li>
              <a href="#">3</a>
            </Li>
            <Li>
              <a href="#">4</a>
            </Li>
          </ListInner>
        </Li>
        {/* </ul> */}
      </ListLinks>
    </Container>
  );
};

export default NavMenu;
