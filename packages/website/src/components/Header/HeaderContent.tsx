import React from 'react';
import styled from '@emotion/styled';

import ButtonBlack from '~/components/ButtonBlack';
import ButtonOutlined from '~/components/ButtonOutlined';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const NameCenter = styled.div`
  display: flex;
`;

const HeaderContent: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {
  const { children, ...otherProps } = props;

  return (
    <Container {...otherProps} ref={ref}>
      <NameCenter>
        <div>LOGO</div>
        <p>
          ФБУН «Екатеринбургский Медицинский Научный Центр профилактики и охраны здоровья рабочих
          промпредприятий»
        </p>
      </NameCenter>
      <ButtonBlack type="button" color="secondary">
        Войти
      </ButtonBlack>
      <ButtonOutlined type="button" color="secondary">
        Регистрация
      </ButtonOutlined>
    </Container>
  );
};

export default React.forwardRef(HeaderContent);
