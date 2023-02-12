/* eslint-disable max-len */
import { SVGProps } from 'react'

export const Close: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      strokeLinejoin: 'round',
      strokeMiterlimit: 2
    }}
    {...props}
  >
    <path
      style={{
        fill: 'none'
      }}
      d="M-448-64H832v800H-448z"
    />
    <path d="m32.033 29.19 15.55-15.55 2.863 2.863-15.55 15.55 15.55 15.55-2.863 2.863-15.55-15.55-15.55 15.55-2.863-2.863 15.55-15.55-15.55-15.55 2.863-2.863 15.55 15.55Z" />
    <path d="m32.033 29.19 15.55-15.55 2.863 2.863-15.55 15.55 15.55 15.55-2.863 2.863-15.55-15.55-15.55 15.55-2.863-2.863 15.55-15.55-15.55-15.55 2.863-2.863 15.55 15.55Z" />
  </svg>
)
