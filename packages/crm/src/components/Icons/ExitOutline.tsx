import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const ArrowRightOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <path
      d="M88 80c-30.738 0-56 25.262-56 56v240c0 30.738 25.262 56 56 56h192c30.738 0 56-25.262 56-56v-40a16 16 0 0 0-16-16 16 16 0 0 0-16 16v40c0 13.444-10.556 24-24 24H88c-13.444 0-24-10.556-24-24V136c0-13.444 10.556-24 24-24h192c13.444 0 24 10.556 24 24v40a16 16 0 0 0 16 16 16 16 0 0 0 16-16v-40c0-30.738-25.262-56-56-56H88zm296 80a16 16 0 0 0-4.14.545 16 16 0 0 0-7.174 4.14 16 16 0 0 0 0 22.63L425.37 240H191a16 16 0 0 0-16 16 16 16 0 0 0 16 16h234.371l-52.685 52.686a16 16 0 0 0 0 22.628 16 16 0 0 0 22.628 0l80-80a16.002 16.002 0 0 0 1.541-1.822 16 16 0 0 0 .145-.199 16.002 16.002 0 0 0 2.154-4.229 16 16 0 0 0 .084-.255 16.002 16.002 0 0 0 .74-4.674A16 16 0 0 0 480 256a16 16 0 0 0-.021-.354 16.002 16.002 0 0 0-.07-1.16 16 16 0 0 0-.067-.642 16.002 16.002 0 0 0-.227-1.237 16 16 0 0 0-.123-.572 16.002 16.002 0 0 0-.445-1.431 16 16 0 0 0-.1-.307 16.002 16.002 0 0 0-.746-1.658 16 16 0 0 0-.242-.422 16.002 16.002 0 0 0-.69-1.139 16 16 0 0 0-.376-.52 16.002 16.002 0 0 0-.737-.939 16 16 0 0 0-.45-.5 16.002 16.002 0 0 0-.392-.433l-80-80A16 16 0 0 0 384 160z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowRightOutline);
export default ForwardRef;
