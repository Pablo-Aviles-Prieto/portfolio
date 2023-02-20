import { IIsExpandedProject } from './IIsExpanedProject'
import { technologies } from '../enums/technologies'

export type IPreviousProjectObj = {
  index: number
  imgsPath: string[]
  title: keyof IIsExpandedProject
  titleText: string
  subtitle: string
  github: string
  webpage: string
  technologies: Array<technologies>
  features: string[]
}
