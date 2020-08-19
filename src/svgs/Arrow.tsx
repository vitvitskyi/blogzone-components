import * as React from 'react';

const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="14.32"
    height="15.654"
    fill="none"
    viewBox="0 0 14.32 15.654"
  >
    <defs>
      <path
        id="path-1"
        fill-rule="evenodd"
        d="M.95254397 0H14.3200896v15.65393957H.95254397V0z"
      />
      <mask
        id="mask-2"
        maskContentUnits="userSpaceOnUse"
        maskUnits="userSpaceOnUse"
      >
        <rect width="14.32" height="15.654" x="0" y="0" fill="black" />
        <use fill="white" href="#path-1" />
      </mask>
      <path
        id="path-4"
        fill-rule="evenodd"
        d="M0 15.65393957h14.3200896V0H0v15.65393957z"
      />
      <mask
        id="mask-5"
        maskContentUnits="userSpaceOnUse"
        maskUnits="userSpaceOnUse"
      >
        <rect width="14.32" height="15.654" x="0" y="0" fill="black" />
        <use fill="white" href="#path-4" />
      </mask>
    </defs>
    <g>
      <g>
        <use fill="none" href="#path-1" />
        <g mask="url(#mask-2)">
          <path
            fill="#2D393D"
            fill-rule="evenodd"
            d="M6.48982382 15.65393957c-2.00540994.00103-4.01081989-.76219998-5.53727985-2.28968994l.72820998-.72820998c2.65018993 2.65121993 6.96485981 2.65327993 9.61710974 0 1.28440996-1.28440997 1.99304994-2.99214992 1.99304994-4.80906987 0-1.81588995-.70863998-3.5246599-1.99304994-4.80906986-2.65018993-2.65121993-6.96485981-2.65121993-9.61710974 0l-.72820998-.72820998c3.05394992-3.05291992 8.01957978-3.05291992 11.0735297 0 1.48010995 1.47907996 2.29483993 3.4453499 2.29483993 5.53727984 0 2.09295994-.81472998 4.05922989-2.29483993 5.53727985-1.52542996 1.52645996-3.5318699 2.28968994-5.53624985 2.28968994"
          />
        </g>
      </g>
      <use fill="none" href="#path-4" />
      <g mask="url(#mask-5)">
        <path
          fill="#2D393D"
          fill-rule="evenodd"
          d="M0 8.34196977h9.62946973V7.3119698H0v1.02999997z"
        />
        <path
          fill="#2D393D"
          fill-rule="evenodd"
          d="M6.33491182 11.85076767l-.72820998-.72820998 3.29393991-3.2949699-3.2939399-3.29496992.72820997-.72820998 4.0221499 4.0231799-4.0221499 4.02317988z"
        />
      </g>
    </g>
  </svg>
);

export default Arrow;
