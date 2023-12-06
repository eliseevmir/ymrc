import React from 'react';
import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';
import { graphql, useFragment } from 'react-relay';
// import { Helmet } from 'react-helmet-async';

import Header from '~/components/Header';
import TemplateSecondHeading from './TemplateSecondHeading';
import TemplateSecondContent from './TemplateSecondContent';
import HeaderMenu from '~/components/HeaderMenu';
import Footer from '~/components/Footer';
import fragment, {
  TemplateSecondDesktopFragment$key,
} from '~/relay/artifacts/TemplateSecondDesktopFragment.graphql';

interface Props {
  readonly fragmentRef: TemplateSecondDesktopFragment$key;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

const MainContainer = styled.main`
  min-height: 1000px;
  padding: 20px;
  flex: 1;
`;

const TemplateSecondDesktopFragment: React.FC<Props> = props => {
  const { fragmentRef } = props;
  const theme = useTheme();
  const { template } = useFragment<TemplateSecondDesktopFragment$key>(fragment, fragmentRef);

  if (template?.__typename !== 'TemplateSecondPage') {
    return null;
  }

  return (
    <>
      {/* <Helmet htmlAttributes={{ lang: meta.locale }}>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet> */}
      <Global
        styles={css`
          body {
            margin: 0;
            background-color: ${theme.color.backgroundPrimary.toString()};
            color: ${theme.color.textPrimary.toString()};
          }
        `}
      />

      {/* <Container> */}
      {/* <Header /> */}
      <Header>{template.mainMenu && <HeaderMenu fragmentRef={template.mainMenu} />}</Header>
      <MainContainer>
        {/* <TemplateSecondHeading fragmentRef={template} />
          <TemplateSecondContent fragmentRef={template} /> */}
      </MainContainer>
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default TemplateSecondDesktopFragment;

graphql`
  fragment TemplateSecondDesktopFragment on Page {
    id
    template {
      __typename
      ... on TemplateSecondPage {
        ...TemplateSecondHeading
        ...TemplateSecondContent
        mainMenu {
          ...HeaderMenuFragment
        }
      }
    }
  }
`;
