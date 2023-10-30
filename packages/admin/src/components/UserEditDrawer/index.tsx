import * as React from 'react';
import styled from '@emotion/styled';
import ModalDrawer, { DrawerProps } from '@via-profit/ui-kit/Modal/Drawer';

import UserEditForm, { UserEditFormProps } from '~/components/UserEditForm';
import LoadingIndicator from '~/components/LoadingIndicator';

export interface UserEditDrawerProps
  extends Omit<DrawerProps, 'id' | 'isOpen' | 'children'>,
    Omit<UserEditFormProps, 'id'> {
  readonly id: string | null;
}

const Container = styled.div`
  height: 80vh;
`;

const UserEditDrawer: React.FC<UserEditDrawerProps> = props => {
  const { id, onError, onCompleted, ...modalProps } = props;

  return (
    <ModalDrawer {...modalProps} isOpen={id !== null}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <Container>
          {id !== null && <UserEditForm id={id} onError={onError} onCompleted={onCompleted} />}
        </Container>
      </React.Suspense>
    </ModalDrawer>
  );
};

export default UserEditDrawer;
