import React from 'react';
import styled from '@emotion/styled';
import ButtonUI, { ButtonProps } from '@via-profit/ui-kit/Button';

const ButtonStyled = styled(ButtonUI)`
  border-radius: 0.7em;
  padding: 0.7em 2em;
`;

const ButtonOutlined: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  props,
  ref,
) => {
  const { children, ...otherProps } = props;

  return (
    <ButtonStyled variant="outlined" {...otherProps} ref={ref}>
      {children}
    </ButtonStyled>
  );
};

export default React.forwardRef(ButtonOutlined);
