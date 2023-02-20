import { technologies } from '../enums/technologies'
import { IPreviousProjectObj } from '../interfaces'

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const previousProjects: IPreviousProjectObj[] = [
  {
    index: 0,
    imgsPath: [`${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg`],
    title: 'portfolio',
    titleText: 'Personal portfolio',
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
  },
  {
    index: 1,
    imgsPath: [`${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg`],
    title: 'dashboardMiranda',
    titleText: 'Hotel Miranda dashboard',
    subtitle: 'Personal portfolio themed as the Ubuntu 22.04 (Jammy Jellyfish)',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
    webpage: 'https://www.pabloaviles.es',
    technologies: [
      technologies.node,
      technologies.express,
      technologies.php,
      technologies.laravel,
      technologies.mongodb,
      technologies.mysql
    ],
    features: [
      `Typing effect 🖊️ created with 'react-type-animation' library`,
      '🦋 Styled with styled-components 🦋',
      'Dark 🌙 and light 💡 theme created with styled-components',
      '🇬🇧🇪🇸 Languages',
      'Animations handled by myself with CSS 🎥'
    ]
  },
  {
    index: 2,
    imgsPath: [`${PUBLIC_URI}/images/jammy-jellyfish-wallpaper.jpg`],
    title: 'hotelMiranda',
    titleText: 'Hotel Miranda',
    subtitle: 'Personal portfolio themed as the Ubuntu 22.04 (Jammy Jellyfish)',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
    webpage: 'https://www.pabloaviles.es',
    technologies: [
      technologies.redux,
      technologies.jest,
      technologies.cypress,
      technologies.playwright,
      technologies.sass
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
