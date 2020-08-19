import * as React from 'react';

const BoxMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.285156 14.0579H6.76904V13.1978H0.285156V14.0579Z"
      fill="#2D393D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.285156 9.75713H11.7692V8.89697H0.285156V9.75713Z"
      fill="#2D393D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.285156 5.45635H10.1331V4.59619H0.285156V5.45635Z"
      fill="#2D393D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.285156 1.15557H13.6495V0.29541H0.285156V1.15557Z"
      fill="#2D393D"
    />
  </svg>
);

export default BoxMenu;
