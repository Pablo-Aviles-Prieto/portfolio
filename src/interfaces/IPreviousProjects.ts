import { IIsExpandedProject } from './IIsExpanedProject'
import { technologies } from '../enums/technologies'

export type IPreviousProjects = Array<{
  index: number
  title: keyof IIsExpandedProject
  subtitle: string
  github: string
  webpage: string
  technologies: Array<technologies>
  features: string[]
}>
