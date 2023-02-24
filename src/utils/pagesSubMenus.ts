import { MalePerson, Chat, Academic, Computer, GithubRounded, LinkedinRounded, Code } from '../components/Icons'
import {
  ReactJS,
  TypeScript,
  JavaScript,
  HTML5,
  CSS3,
  NodeJS,
  ExpressJS,
  PHP,
  Laravel,
  MongoDB,
  MySQL,
  Redux,
  Jest,
  Cypress,
  Sass,
  Playwright
} from '../components/Icons/technologies'
import { profileInfoSubPages, projectsSubPages, contactSubPages } from '../enums'
import { ISubMenuObj } from '../interfaces'

export const profileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: profileInfoSubPages.introduction },
  { SVG: Computer, title: 'experience', content: profileInfoSubPages.experience },
  { SVG: Academic, title: 'education', content: profileInfoSubPages.education }
]

export const projectsSubMenu: ISubMenuObj[] = [
  { SVG: Code, title: 'introduction', content: projectsSubPages.introduction },
  { SVG: ReactJS, title: 'react', content: projectsSubPages.react },
  { SVG: TypeScript, title: 'typescript', content: projectsSubPages.typescript },
  { SVG: JavaScript, title: 'javascript', content: projectsSubPages.javascript },
  { SVG: HTML5, title: 'html', content: projectsSubPages.html },
  { SVG: CSS3, title: 'css', content: projectsSubPages.css },
  { SVG: NodeJS, title: 'node', content: projectsSubPages.node },
  { SVG: ExpressJS, title: 'express', content: projectsSubPages.express },
  { SVG: PHP, title: 'php', content: projectsSubPages.php },
  { SVG: Laravel, title: 'laravel', content: projectsSubPages.laravel },
  { SVG: MongoDB, title: 'mongodb', content: projectsSubPages.mongodb },
  { SVG: MySQL, title: 'mysql', content: projectsSubPages.mysql },
  { SVG: Redux, title: 'redux', content: projectsSubPages.redux },
  { SVG: Jest, title: 'jest', content: projectsSubPages.jest },
  { SVG: Cypress, title: 'cypress', content: projectsSubPages.cypress },
  { SVG: Playwright, title: 'playwright', content: projectsSubPages.playwright },
  { SVG: Sass, title: 'sass', content: projectsSubPages.sass }
]

export const contactSubMenu: ISubMenuObj[] = [
  { SVG: Chat, title: 'introduction', content: contactSubPages.introduction },
  { SVG: GithubRounded, title: 'github', content: contactSubPages.github },
  { SVG: LinkedinRounded, title: 'linkedin', content: contactSubPages.linkedin }
]
