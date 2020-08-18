import * as React from 'react'

const AddCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <defs>
      <path id="path-2" fill-rule="evenodd" d="M0 16h16V0H0v16z" />
      <mask
        id="mask-3"
        maskContentUnits="userSpaceOnUse"
        maskUnits="userSpaceOnUse"
      >
        <rect width="16" height="16" x="0" y="0" fill="black" />
        <use fill="white" href="#path-2" />
      </mask>
    </defs>
    <g>
      <path
        fill="rgb(255,255,255)"
        fill-rule="evenodd"
        d="M8.001 16C3.589 16 0 12.411 0 8s3.589-8 8.001-8C12.412 0 16 3.589 16 8h-1c0-3.859-3.14-7-6.999-7C4.141 1 1 4.141 1 8s3.141 7 7.001 7v1z"
      />
      <use fill="none" href="#path-2" />
      <g mask="url(#mask-3)">
        <path
          fill="rgb(255,255,255)"
          fill-rule="evenodd"
          d="M6.998 11.763h8.463v-1H6.998v1z"
        />
        <path
          fill="rgb(255,255,255)"
          fill-rule="evenodd"
          d="M10.729 15.494h1V7.031h-1v8.463z"
        />
      </g>
    </g>
  </svg>
)

export default AddCircle
