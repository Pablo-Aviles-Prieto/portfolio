import { technologies } from '../enums/technologies'
import { IPreviousProjects } from '../interfaces'

export const previousProjects: IPreviousProjects = [
  {
    index: 0,
    title: 'portfolio',
    subtitle: 'Personal portfolio themed as the Ubuntu 22.04 (Jammy Jellyfish)',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
    webpage: 'https://www.pabloaviles.es',
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.git
    ],
    features: [
      `Typing effect 🖊️ created with 'react-type-animation' library`,
      '🦋 Styled with styled-components 🦋',
      'Dark 🌙 and light 💡 theme created with styled-components',
      '🇬🇧🇪🇸 Languages',
      'Animations handled by myself with CSS 🎥'
    ]
  }
]
