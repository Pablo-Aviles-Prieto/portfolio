import { MalePerson, Chat, Close } from '../components/Icons'
import { profileInfoSubPages, projectsSubPages, contactSubPages } from '../enums'
import { ISubMenuObj } from '../interfaces'

export const profileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: profileInfoSubPages.introduction },
  { SVG: Chat, title: 'experience', content: profileInfoSubPages.experience },
  { SVG: Close, title: 'education', content: profileInfoSubPages.education }
]
export const projectsSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: projectsSubPages.introduction },
  { SVG: MalePerson, title: 'technologies', content: projectsSubPages.technologies }
]
export const contactSubMenu: ISubMenuObj[] = [
  { SVG: Chat, title: 'introduction', content: contactSubPages.introduction }
]
