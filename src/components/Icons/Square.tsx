/* eslint-disable max-len */
import { SVGProps } from 'react'

export const Square: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor"
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
      d="M-1152-64H128v800h-1280z"
    />
    <path d="M50.005 56H14.016a5.997 5.997 0 0 1-5.995-5.995V13.994a5.998 5.998 0 0 1 5.995-5.995h35.989A5.998 5.998 0 0 1 56 13.994v36.011A5.997 5.997 0 0 1 50.005 56Zm-.993-4.001a2.99 2.99 0 0 0 2.989-2.989V14.989A2.99 2.99 0 0 0 49.012 12H15.009a2.99 2.99 0 0 0-2.989 2.989V49.01a2.99 2.99 0 0 0 2.989 2.989h34.003Z" />
  </svg>
)
