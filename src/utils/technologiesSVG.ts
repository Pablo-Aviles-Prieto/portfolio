import { SVGProps } from 'react'
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
  Playwright,
  Sass
} from '../components/Icons/technologies'
import { technologies } from '../enums/technologies'

type ITechnologiesSVG = Array<{ title: technologies; SVG: React.FC<SVGProps<SVGSVGElement>> }>

export const technologiesSVG: ITechnologiesSVG = [
  { title: technologies.react, SVG: ReactJS },
  { title: technologies.typescript, SVG: TypeScript },
  { title: technologies.javascript, SVG: JavaScript },
  { title: technologies.html, SVG: HTML5 },
  { title: technologies.css, SVG: CSS3 },
  { title: technologies.node, SVG: NodeJS },
  { title: technologies.express, SVG: ExpressJS },
  { title: technologies.php, SVG: PHP },
  { title: technologies.laravel, SVG: Laravel },
  { title: technologies.mongodb, SVG: MongoDB },
  { title: technologies.mysql, SVG: MySQL },
  { title: technologies.redux, SVG: Redux },
  { title: technologies.jest, SVG: Jest },
  { title: technologies.cypress, SVG: Cypress },
  { title: technologies.playwright, SVG: Playwright },
  { title: technologies.sass, SVG: Sass }
]
