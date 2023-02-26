/* eslint-disable max-len */
import { SVGProps } from 'react'

export const BigArrowDown: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-big-down"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" fill="none" />
    <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1-1.414 0l-6.586-6.586A1 1 0 0 1 5.414 12H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />
  </svg>
)
