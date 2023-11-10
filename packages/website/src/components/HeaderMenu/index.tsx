import React from 'react';
import styled from '@emotion/styled';
import { graphql, useFragment } from 'react-relay';

import RootItem from '~/components/HeaderMenu/RootItem';
// import fragment, { HeaderMenuFragment$key } from '~/relay/artifacts/HeaderMenuFragment.graphql';

export interface HeaderMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  // readonly fragmentRef: HeaderMenuFragment$key;
}

const Nav = styled.nav`
  flex: 1;
  display: flex;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  align-items: center;
`;

const HeaderMenu: React.ForwardRefRenderFunction<HTMLUListElement, HeaderMenuProps> = (
  props,
  ref,
) => {
  const {
    // fragmentRef,
    ...otherProps
  } = props;
  // const menu = useFragment<HeaderMenuFragment$key>(fragment, fragmentRef);

  const items = [
    {
      id: '55b30270-ec2e-43b7-ae62-8a7c015ed1c2',
      url: '/',
      page: '',
      target: 'self',
      childs: '',
      name: 'О центре',
      parent: '',
    },
    {
      id: '55b30270-ec2e-43b7-ae62-8a7c022ed1c2',
      url: '/',
      page: '',
      target: 'self',
      childs: [
        {
          id: '55b30270-ec2e-43b7-ae62-8a7c033ed1c2',
          url: '/',
          page: '',
          target: 'self',
          childs: [],
          name: 'Медицинская',
          parent: '55b30270-ec2e-43b7-ae62-8a7c022ed1c2',
        },
        {
          id: '55b30270-ec2e-55b7-ae62-8a7c033ed1c2',
          url: '/',
          page: '',
          target: 'self',
          childs: [],
          name: 'Научная',
          parent: '55b30270-ec2e-43b7-ae62-8a7c022ed1c2',
        },
        {
          id: '88b30270-ec2e-55b7-ae62-8a7c033ed1c2',
          url: '/',
          page: '',
          target: 'self',
          childs: [],
          name: 'Образовательная',
          parent: '55b30270-ec2e-43b7-ae62-8a7c022ed1c2',
        },
      ],

      name: 'Деятельность',
      parent: '',
    },
    {
      id: '55b30275-ec2e-45b7-ae62-8a7c015ed1c2',
      url: '/',
      page: '',
      target: 'self',
      childs: '',
      name: 'Услуги',
      parent: '',
    },
    {
      id: '55b30370-ec2e-45b7-ae62-8a7c015ed1c2',
      url: '/',
      page: '',
      target: 'self',
      childs: '',
      name: 'ОСМУиС',
      parent: '',
    },
    {
      id: '12b30270-ec2e-45b7-ae62-8a7c015ed1c2',
      url: '/',
      page: '',
      target: 'self',
      childs: '',
      name: 'Контакты',
      parent: '',
    },
  ];

  return (
    <Nav {...otherProps} ref={ref}>
      {/* <Menu>{menu?.items?.map(item => <RootItem key={item.id} item={item} />)}</Menu> */}
      <Menu>
        {items.map(item => (
          <RootItem key={item.id} item={item} />
        ))}
      </Menu>
    </Nav>
  );
};

export default React.forwardRef(HeaderMenu);

graphql`
  fragment HeaderMenuFragment on PageMenu {
    id
    items {
      id
      url
      name
      target
      page {
        id
        name
        path
      }
      parent {
        id
      }
      childs {
        id
        url
        name
        target
        page {
          id
          name
          path
        }
        parent {
          id
        }
        childs {
          id
          url
          name
          target
          page {
            id
            name
            path
          }
          parent {
            id
          }
        }
      }
    }
  }
`;
