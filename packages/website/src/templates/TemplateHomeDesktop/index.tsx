import React from 'react';
import styled from '@emotion/styled';
import { Global, css, useTheme } from '@emotion/react';
import { graphql, useFragment } from 'react-relay';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Slider from '~/components/Slider';
import Building from '~/assets/BUILDING.jpg';

import fragment, {
  TemplateHomeDesktopFragment$key,
} from '~/relay/artifacts/TemplateHomeDesktopFragment.graphql';

interface Props {
  readonly fragmentRef: TemplateHomeDesktopFragment$key;
}

const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const ImageWrapper = styled.div`
  outline: 1px solid green;
  width: 80%;
  /* width: 900px; */
  height: 650px;
  background-image: url(${Building});
  background-size: cover;
  background-position: 0 -350px;
  background-repeat: no-repeat;
  margin: 0 auto;
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
      <Header fragmentRef={template.mainMenu} />
      <MainContainer>
        {/* <Slider /> */}
        <ImageWrapper />
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
          ...HeaderFragment
          # ...HeaderMenuFragment
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
