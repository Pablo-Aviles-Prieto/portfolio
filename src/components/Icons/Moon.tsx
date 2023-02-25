/* eslint-disable max-len */
import { SVGProps } from 'react'

export const Moon: React.FC<SVGProps<SVGSVGElement>> = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Dark theme</title>
    <path
      opacity={0.1}
      d="M20.867 15.316c.052-.118-.066-.238-.188-.194-3.362 1.215-7.23.498-9.767-2.038-2.525-2.525-3.243-6.367-2.05-9.718.049-.139-.088-.273-.222-.213l-.027.012c-1.855.838-3.506 2.252-4.476 4.032a9.335 9.335 0 0 0 2.255 11.664A9.344 9.344 0 0 0 12.332 21a9.344 9.344 0 0 0 5.23-1.601c1.427-.964 2.557-2.423 3.27-4.003l.035-.08Z"
      fill="currentColor"
    />
    <path
      d="M20.867 15.316c.052-.118-.066-.238-.188-.194v0c-3.362 1.215-7.23.498-9.767-2.038-2.525-2.525-3.243-6.367-2.05-9.718v0c.049-.139-.088-.273-.222-.213l-.027.012c-1.855.838-3.506 2.252-4.476 4.032a9.335 9.335 0 0 0 2.255 11.664A9.344 9.344 0 0 0 12.332 21a9.344 9.344 0 0 0 5.23-1.601c1.427-.964 2.557-2.423 3.27-4.003l.035-.08Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
