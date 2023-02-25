/* eslint-disable max-len */
import { SVGProps } from 'react'

export const Light: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-sun"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <title>Light theme</title>
    <path d="M0 0h24v24H0z" stroke="none" />
    <circle cx={12} cy={12} r={4} />
    <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7" />
  </svg>
)
