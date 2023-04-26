import * as React from 'react';
import { useTheme } from '@emotion/react';

const UnknownFlag: React.ForwardRefRenderFunction<SVGSVGElement, React.SVGProps<SVGSVGElement>> = (
  props,
  ref,
) => {
  const { colors } = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      ref={ref}
      {...props}
    >
      <path
        transform="translate(78.682 31.951)"
        d="m-78.682-31.951h512v512h-512z"
        fill={colors.backgroundPrimary}
        strokeLinejoin="round"
        strokeWidth="2.176"
      />
      <path
        transform="translate(78.682 31.951)"
        d="m177.32 288.09q-4.915 0-8.0953-3.1803-3.1803-3.4694-3.1803-8.3844 0-11.854 5.7824-25.153 5.7823-13.299 15.612-22.551l7.2279-6.6497q9.83-9.2518 15.323-15.323 5.4932-6.3606 8.9626-15.034 3.7585-8.9626 3.7585-20.527 0-11.276-5.4932-20.527-5.4932-9.5409-15.612-15.034-10.119-5.4932-23.129-5.4932-21.395 0-34.116 13.01-12.432 12.721-12.432 33.248 0 4.915-3.1803 8.0953-2.8912 2.8912-7.8062 2.8912t-8.0953-2.8912q-3.1803-3.1803-3.1803-8.0953 0-19.66 8.6735-34.983 8.6735-15.323 24.286-23.997 15.612-8.6735 35.851-8.6735 19.082 0 34.116 8.3844 15.323 8.0953 23.708 22.551 8.6735 14.456 8.6735 32.67 0 14.167-4.6259 24.864-4.6259 10.408-11.854 18.503-6.9388 8.0953-19.949 19.949l-5.2041 4.6259q-8.0953 7.2279-11.565 17.058-3.1803 9.5409-3.1803 19.082 0 4.915-3.1803 8.3844-3.1803 3.1803-8.0953 3.1803zm0 51.174q-7.2279 0-12.143-4.915-4.6259-4.915-4.6259-11.854 0-7.2279 4.915-12.143 4.915-4.915 11.854-4.915t11.854 4.915q5.2041 4.915 5.2041 12.143 0 6.9388-5.2041 11.854-4.915 4.915-11.854 4.915z"
        fill={colors.textPrimary}
        strokeWidth=".72279"
      />
    </svg>
  );
};

export default React.forwardRef(UnknownFlag);
