import React from 'react';
import styled from '@emotion/styled';
import ButtonUI, { ButtonProps } from '@via-profit/ui-kit/Button';
import ButtonContainer from '@via-profit/ui-kit/Button/ButtonContainer';

const ButtonStyled = styled(ButtonUI)`
  border-radius: 0.7em;
  padding: 0.7em 1em;
`;

const Btn = styled(ButtonContainer)`
  /* background: ${({ theme }) => theme.myGradient.buttonBlack.toString()}; */
`;

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <ButtonStyled
      {...otherProps}
      overrides={{
        Container: React.forwardRef(function BtnContainer(bProps, bRef) {
          return <Btn {...bProps} ref={bRef} />;
        }),
      }}
      ref={ref}
    >
      {children}
    </ButtonStyled>
  );
};

export default React.forwardRef(Button);