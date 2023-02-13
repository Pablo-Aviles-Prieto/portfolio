import { SVGProps } from 'react'
import { IProfileInfoSubPages } from './ISubPages'

export interface ISubMenuObj {
  SVG: React.FC<SVGProps<SVGSVGElement>>
  title: IProfileInfoSubPages
  cbFun?: () => void
}
