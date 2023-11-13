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
      page: {
        id: '',
        name: '',
        path: '',
      },
      target: 'SELF',
      childs: null,
      name: 'О центре',
      parent: { id: '' },
    },
    {
      id: '55b30270-ec2e-43b7-ae62-8a7c022ed1c2',
      url: '/',
      page: {
        id: '',
        name: '',
        path: '',
      },
      target: 'SELF',
      childs: [
        {
          id: '55b30270-ec2e-43b7-ae62-8a7c033ed1c2',
          url: '/',
          page: {
            id: '',
            name: '',
            path: '',
          },
          target: 'SELF',
          childs: null,
          name: 'Медицинская',
          parent: { id: '' },
        },
        {
          id: '55b30270-ec2e-55b7-ae62-8a7c033ed1c2',
          url: '/',
          page: {
            id: '',
            name: '',
            path: '',
          },
          target: 'SELF',
          childs: null,
          name: 'Научная',
          parent: { id: '' },
        },
        {
          id: '88b30270-ec2e-55b7-ae62-8a7c033ed1c2',
          url: '/',
          page: {
            id: '',
            name: '',
            path: '',
          },
          target: 'SELF',
          childs: null,
          name: 'Образовательная',
          parent: { id: '' },
        },
      ],

      name: 'Деятельность',
      parent: { id: '' },
    },
    {
      id: '55b30275-ec2e-45b7-ae62-8a7c015ed1c2',
      url: '/',
      page: {
        id: '',
        name: '',
        path: '',
      },
      target: 'SELF',
      childs: null,
      name: 'Услуги',
      parent: { id: '' },
    },
    {
      id: '55b30370-ec2e-45b7-ae62-8a7c015ed1c2',
      url: '/',
      page: {
        id: '',
        name: '',
        path: '',
      },
      target: 'SELF',
      childs: null,
      name: 'ОСМУиС',
      parent: { id: '' },
    },
    {
      id: '12b30270-ec2e-45b7-ae62-8a7c015ed1c2',
      name: 'Контакты',
      page: {
        id: '',
        name: '',
        path: '',
      },
      target: 'SELF',
      parent: { id: '' },
      url: '/',
      childs: null,
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

/*
 readonly items: ReadonlyArray<{
    readonly childs: ReadonlyArray<{
      readonly childs: ReadonlyArray<{
        readonly id: string;
        readonly name: string | null;
        readonly page: {
          readonly id: string;
          readonly name: string;
          readonly path: string;
        } | null;
        readonly parent: {
          readonly id: string;
        } | null;
        readonly target: PageWindowTarget;
        readonly url: string | null;
      }> | null;
      readonly id: string;
      readonly name: string | null;
      readonly page: {
        readonly id: string;
        readonly name: string;
        readonly path: string;
      } | null;
      readonly parent: {
        readonly id: string;
      } | null;
      readonly target: PageWindowTarget;
      readonly url: string | null;
    }> | null;
    readonly id: string;
    readonly name: string | null;
    readonly page: {
      readonly id: string;
      readonly name: string;
      readonly path: string;
    } | null;
    readonly parent: {
      readonly id: string;
    } | null;
    readonly target: PageWindowTarget;
    readonly url: string | null;
  }> | null;
*/
