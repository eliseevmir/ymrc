import React from 'react';
import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';
import { graphql, useFragment } from 'react-relay';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import HeaderMenu from '~/components/HeaderMenu';

// import Slider from '~/components/Slider';
import fragment, {
  TemplateHomeDesktopFragment$key,
} from '~/relay/artifacts/TemplateHomeDesktopFragment.graphql';

interface Props {
  readonly fragmentRef: TemplateHomeDesktopFragment$key;
}

const MainContainer = styled.main`
  min-height: 1000px;
`;

const Slider = styled.div`
  background-color: pink;
  width: 100%;
  height: 400px;
`;

const TemplateHomeDesktopFragment: React.FC<Props> = props => {
  const { fragmentRef } = props;
  const theme = useTheme();
  const { template } = useFragment<TemplateHomeDesktopFragment$key>(fragment, fragmentRef);

  if (template?.__typename !== 'TemplateHomePage') {
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
      <Header>
        <HeaderMenu fragmentRef={template.mainMenu} />
      </Header>
      <MainContainer>
        <Slider />
      </MainContainer>
      <Footer />
    </>
  );
};

export default TemplateHomeDesktopFragment;

graphql`
  fragment TemplateHomeDesktopFragment on Page {
    template {
      __typename
      ... on TemplateHomePage {
        id

        mainMenu {
          ...HeaderMenuFragment
        }
        # ...TemplateHomeHeadingFragment
        # ...TemplateHomePaymentsFragment
        # ...TemplateHomeSliderFragment
      }
    }

    # headerMenu {
    #   ...HeaderMenuFragment
    # }
    # pageMenus {
    #   ...HeaderMenuFragment
    # }
  }
`;
