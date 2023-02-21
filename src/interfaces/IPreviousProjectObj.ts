import { IIsExpandedProject } from './IIsExpanedProject'
import { technologies } from '../enums/technologies'

export type IImages = {
  path: string
  description: string
}

export type IPreviousProjectObj = {
  index: number
  images: IImages[]
  title: keyof IIsExpandedProject
  titleText: string
  subtitle: string
  github: string
  webpage?: string
  technologies: Array<technologies>
  features: string[]
}
