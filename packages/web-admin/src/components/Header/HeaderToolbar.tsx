import * as React from 'react';
import styled from '@emotion/styled';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { uiActions } from '~/redux/slicers/ui';
import Button from '@via-profit/ui-kit/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const selector = createSelector(
  (store: ReduxStore) => store.ui.fontSize,
  fontSize => ({ fontSize }),
);

const HeaderToolbar: React.FC = () => {
  const { fontSize } = useSelector(selector);
  const dispatch = useDispatch();

  const setFontSize = (fontSizeValue: FontSize) => () => {
    Cookies.set('fontSize', fontSizeValue);
    dispatch(uiActions.fontSize(fontSizeValue));
  };

  return (
    <Container>
      <Button color={fontSize === 'small' ? 'accent' : 'default'} onClick={setFontSize('small')}>
        small
      </Button>
      <Button color={fontSize === 'normal' ? 'accent' : 'default'} onClick={setFontSize('normal')}>
        normal
      </Button>
      <Button color={fontSize === 'medium' ? 'accent' : 'default'} onClick={setFontSize('medium')}>
        medium
      </Button>
      <Button color={fontSize === 'large' ? 'accent' : 'default'} onClick={setFontSize('large')}>
        large
      </Button>
    </Container>
  );
};

export default HeaderToolbar;
