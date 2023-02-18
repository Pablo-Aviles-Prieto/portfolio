import { MalePerson, Chat, Academic, Computer, GithubRounded, LinkedinRounded } from '../components/Icons'
import { profileInfoSubPages, projectsSubPages, contactSubPages } from '../enums'
import { ISubMenuObj } from '../interfaces'

export const profileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: profileInfoSubPages.introduction },
  { SVG: Computer, title: 'experience', content: profileInfoSubPages.experience },
  { SVG: Academic, title: 'education', content: profileInfoSubPages.education }
]
export const projectsSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: projectsSubPages.introduction },
  { SVG: MalePerson, title: 'technologies', content: projectsSubPages.technologies }
]
export const contactSubMenu: ISubMenuObj[] = [
  { SVG: Chat, title: 'introduction', content: contactSubPages.introduction },
  { SVG: GithubRounded, title: 'github', content: contactSubPages.github },
  { SVG: LinkedinRounded, title: 'linkedin', content: contactSubPages.linkedin }
]
