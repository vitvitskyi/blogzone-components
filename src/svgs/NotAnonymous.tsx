import * as React from 'react'

const NotAnonymous = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
  >
    <defs>
      <path id="path-3" fill-rule="evenodd" d="M0 17h17V0H0v17z" />
      <mask
        id="mask-4"
        maskContentUnits="userSpaceOnUse"
        maskUnits="userSpaceOnUse"
      >
        <rect width="17" height="17" x="0" y="0" fill="black" />
        <use fill="white" href="#path-3" />
      </mask>
    </defs>
    <g>
      <path
        fill="rgb(0,153,207)"
        fill-rule="evenodd"
        d="M0 .00003043h11.70800781C14.62597656.00003043 17 2.37405387 17 5.29104606v11.70898437H0v-17zm1 16h15V5.29104606c0-2.36602783-1.9260254-4.29101563-4.29199219-4.29101563H1v15z"
      />
      <path
        fill="rgb(0,153,207)"
        fill-rule="evenodd"
        d="M4.4864502 10.59707633h-1c0-.94494629.52404785-1.75994873 1.29003906-2.19799804C4.01049805 7.96109 3.4864502 7.145111 3.4864502 6.20108024c0-1.39996338 1.14001464-2.53997803 2.54003906-2.53997803 1.39990234 0 2.53991699 1.14001465 2.53991699 2.53997803 0 .94403076-.52392578 1.76000976-1.289917 2.19799805.76599122.43804931 1.289917 1.25305175 1.289917 2.19799804h-1c0-.84997558-.6899414-1.53997802-1.539917-1.53997802-.85009765 0-1.54003905.69000244-1.54003905 1.53997802zm3.07995605-4.3959961c0-.84997558-.6899414-1.53997802-1.539917-1.53997802-.85009765 0-1.54003905.69000244-1.54003905 1.53997803 0 .85003662.6899414 1.54003906 1.54003906 1.54003906.84997558 0 1.53991699-.69000244 1.53991699-1.54003906z"
      />
      <use fill="none" href="#path-3" />
      <g mask="url(#mask-4)">
        <path
          fill="rgb(0,153,207)"
          fill-rule="evenodd"
          d="M10.525 5.829h2.934v-1h-2.934v1z"
        />
        <path
          fill="rgb(0,153,207)"
          fill-rule="evenodd"
          d="M10.525 8.332h2.934v-1h-2.934v1z"
        />
        <path
          fill="rgb(0,153,207)"
          fill-rule="evenodd"
          d="M10.525 10.835h2.934v-1h-2.934v1z"
        />
        <path
          fill="rgb(0,153,207)"
          fill-rule="evenodd"
          d="M3.541 13.338h9.918v-1H3.541v1z"
        />
      </g>
    </g>
  </svg>
)

export default NotAnonymous
