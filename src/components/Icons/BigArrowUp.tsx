/* eslint-disable max-len */
import { SVGProps } from 'react'

export const BigArrowUp: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-arrow-big-top"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#ff8e00"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" fill="none" />
    <path d="M9 20v-8H5.414a1 1 0 0 1-.707-1.707l6.586-6.586a1 1 0 0 1 1.414 0l6.586 6.586A1 1 0 0 1 18.586 12H15v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
  </svg>
)