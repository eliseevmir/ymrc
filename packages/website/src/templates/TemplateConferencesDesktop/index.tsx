import React from 'react';
import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';
import { graphql, useFragment } from 'react-relay';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import HeaderMenu from '~/components/HeaderMenu';

// import Slider from '~/components/Slider';
import fragment, {
  TemplateConferencesDesktopFragment$key,
} from '~/relay/artifacts/TemplateConferencesDesktopFragment.graphql';

interface Props {
  readonly fragmentRef: TemplateConferencesDesktopFragment$key;
}

interface Props {}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const MainContainer = styled.main`
  min-height: 1000px;
`;

const Slider = styled.div`
  background-color: pink;
  width: 100%;
  height: 400px;
`;

const TemplateConferencesDesktop: React.FC<Props> = props => {
  const { fragmentRef } = props;
  const theme = useTheme();
  const { template } = useFragment<TemplateConferencesDesktopFragment$key>(fragment, fragmentRef);

  if (template?.__typename !== 'TemplateConferencesPage') {
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
      <Header>{template.mainMenu && <HeaderMenu fragmentRef={template.mainMenu} />}</Header>
      {/* <Header /> */}
      <MainContainer>
        <Slider />
      </MainContainer>
      <Footer />

      {/* </Container> */}
    </>
  );
};

export default TemplateConferencesDesktop;

graphql`
  fragment TemplateConferencesDesktopFragment on Page {
    template {
      __typename
      ... on TemplateConferencesPage {
        id
        mainMenu {
          ...HeaderMenuFragment
        }

        # ...TemplateHomeHeadingFragment
        # ...TemplateHomePaymentsFragment
        # ...TemplateHomeSliderFragment
      }
    }
  }
`;
