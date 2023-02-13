import { MalePerson, Chat, Close } from '../components/Icons'
import { ISubMenuObj } from '../interfaces'

export const profileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction' },
  { SVG: Chat, title: 'experience' },
  { SVG: Close, title: 'education' }
]
export const projectsSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction' },
  { SVG: MalePerson, title: 'technologies' }
]
export const contactSubMenu: ISubMenuObj[] = [{ SVG: Chat, title: 'introduction' }]
