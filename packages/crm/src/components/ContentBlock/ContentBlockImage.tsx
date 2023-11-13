import React from 'react';
import { graphql, useFragment } from 'react-relay';

import fragmentSpec, {
  ContentBlockImageFragment$key,
} from '~/relay/artifacts/ContentBlockImageFragment.graphql';

export interface ContentBlockImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  readonly fragmentRef: ContentBlockImageFragment$key | null;
}

const ContentBlockImage: React.ForwardRefRenderFunction<
  HTMLImageElement,
  ContentBlockImageProps
> = (props, ref) => {
  const { fragmentRef, ...imageProps } = props;
  const fragment = useFragment(fragmentSpec, fragmentRef);

  if (!fragment) {
    return null;
  }

  const { file, alt, title } = fragment;

  return <img src={file.url} alt={alt || ''} title={title || ''} {...imageProps} ref={ref} />;
};

export default React.forwardRef(ContentBlockImage);

graphql`
  fragment ContentBlockImageFragment on ContentBlockImage {
    id
    alt
    title
    file {
      url
      thumbnail: transform(input: [{ contain: { w: 160, h: 160 }, blur: 4 }]) {
        url
      }
    }
  }
`;
