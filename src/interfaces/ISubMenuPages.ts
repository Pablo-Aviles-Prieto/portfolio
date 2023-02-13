import { SVGProps } from 'react'
import { IProfileInfoSubPages, IProjectsSubPages, IContactSubPages } from './ISubPages'

export interface ISubMenuObj {
  SVG: React.FC<SVGProps<SVGSVGElement>>
  title: IProfileInfoSubPages | IProjectsSubPages | IContactSubPages
  content: string
}
