import { enProjectsSubPages, enContactSubPages, enProfileInfoSubPages } from '../enums'

export type IProfileInfoSubPages = keyof typeof enProfileInfoSubPages
export type IProjectsSubPages = keyof typeof enProjectsSubPages
export type IContactSubPages = keyof typeof enContactSubPages
