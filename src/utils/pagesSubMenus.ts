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
import {
  enProfileInfoSubPages,
  esProfileInfoSubPages,
  enProjectsSubPages,
  esProjectsSubPages,
  enContactSubPages,
  esContactSubPages
} from '../enums'
import { ISubMenuObj } from '../interfaces'

export const enProfileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: enProfileInfoSubPages.introduction },
  { SVG: Computer, title: 'experience', content: enProfileInfoSubPages.experience },
  { SVG: Academic, title: 'education', content: enProfileInfoSubPages.education }
]

export const esProfileSubMenu: ISubMenuObj[] = [
  { SVG: MalePerson, title: 'introduction', content: esProfileInfoSubPages.introduction },
  { SVG: Computer, title: 'experience', content: esProfileInfoSubPages.experience },
  { SVG: Academic, title: 'education', content: esProfileInfoSubPages.education }
]

export const enProjectsSubMenu: ISubMenuObj[] = [
  { SVG: Code, title: 'introduction', content: enProjectsSubPages.introduction },
  { SVG: ReactJS, title: 'react', content: enProjectsSubPages.react },
  { SVG: TypeScript, title: 'typescript', content: enProjectsSubPages.typescript },
  { SVG: JavaScript, title: 'javascript', content: enProjectsSubPages.javascript },
  { SVG: HTML5, title: 'html', content: enProjectsSubPages.html },
  { SVG: CSS3, title: 'css', content: enProjectsSubPages.css },
  { SVG: NodeJS, title: 'node', content: enProjectsSubPages.node },
  { SVG: ExpressJS, title: 'express', content: enProjectsSubPages.express },
  { SVG: PHP, title: 'php', content: enProjectsSubPages.php },
  { SVG: Laravel, title: 'laravel', content: enProjectsSubPages.laravel },
  { SVG: MongoDB, title: 'mongodb', content: enProjectsSubPages.mongodb },
  { SVG: MySQL, title: 'mysql', content: enProjectsSubPages.mysql },
  { SVG: Redux, title: 'redux', content: enProjectsSubPages.redux },
  { SVG: Jest, title: 'jest', content: enProjectsSubPages.jest },
  { SVG: Cypress, title: 'cypress', content: enProjectsSubPages.cypress },
  { SVG: Playwright, title: 'playwright', content: enProjectsSubPages.playwright },
  { SVG: Sass, title: 'sass', content: enProjectsSubPages.sass }
]

export const esProjectsSubMenu: ISubMenuObj[] = [
  { SVG: Code, title: 'introduction', content: esProjectsSubPages.introduction },
  { SVG: ReactJS, title: 'react', content: esProjectsSubPages.react },
  { SVG: TypeScript, title: 'typescript', content: esProjectsSubPages.typescript },
  { SVG: JavaScript, title: 'javascript', content: esProjectsSubPages.javascript },
  { SVG: HTML5, title: 'html', content: esProjectsSubPages.html },
  { SVG: CSS3, title: 'css', content: esProjectsSubPages.css },
  { SVG: NodeJS, title: 'node', content: esProjectsSubPages.node },
  { SVG: ExpressJS, title: 'express', content: esProjectsSubPages.express },
  { SVG: PHP, title: 'php', content: esProjectsSubPages.php },
  { SVG: Laravel, title: 'laravel', content: esProjectsSubPages.laravel },
  { SVG: MongoDB, title: 'mongodb', content: esProjectsSubPages.mongodb },
  { SVG: MySQL, title: 'mysql', content: esProjectsSubPages.mysql },
  { SVG: Redux, title: 'redux', content: esProjectsSubPages.redux },
  { SVG: Jest, title: 'jest', content: esProjectsSubPages.jest },
  { SVG: Cypress, title: 'cypress', content: esProjectsSubPages.cypress },
  { SVG: Playwright, title: 'playwright', content: esProjectsSubPages.playwright },
  { SVG: Sass, title: 'sass', content: esProjectsSubPages.sass }
]

export const enContactSubMenu: ISubMenuObj[] = [
  { SVG: Chat, title: 'introduction', content: enContactSubPages.introduction },
  { SVG: GithubRounded, title: 'github', content: enContactSubPages.github },
  { SVG: LinkedinRounded, title: 'linkedin', content: enContactSubPages.linkedin }
]

export const esContactSubMenu: ISubMenuObj[] = [
  { SVG: Chat, title: 'introduction', content: esContactSubPages.introduction },
  { SVG: GithubRounded, title: 'github', content: esContactSubPages.github },
  { SVG: LinkedinRounded, title: 'linkedin', content: esContactSubPages.linkedin }
]
