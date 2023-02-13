import { projectsSubPages, contactSubPages, profileInfoSubPages } from '../enums'

export type IProfileInfoSubPages = keyof typeof profileInfoSubPages
export type IProjectsSubPages = keyof typeof projectsSubPages
export type IContactSubPages = keyof typeof contactSubPages
