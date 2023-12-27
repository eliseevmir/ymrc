import React from 'react';
import ParagraphUI, { ParagraphProps } from '@via-profit/ui-kit/Typography/Paragraph';

const Paragraph: React.ForwardRefRenderFunction<HTMLParagraphElement, ParagraphProps> = (
  props,
  ref,
) => {
  const { children, ...otherProps } = props;

  return (
    <ParagraphUI {...otherProps} ref={ref}>
      {children}
    </ParagraphUI>
  );
};

export default React.forwardRef(Paragraph);
