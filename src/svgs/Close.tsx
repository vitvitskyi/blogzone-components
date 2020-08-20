import * as React from 'react';

const Close = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="25"
    height="25"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.46527 0.708553L8.68055 4.92383L4.46527 9.1391"
      stroke="#8A8A8A"
      stroke-width="1.386"
    />
    <path
      d="M12.8658 0.708553L8.65051 4.92383L12.8658 9.1391"
      stroke="#8A8A8A"
      stroke-width="1.386"
    />
  </svg>
);

export default Close;
