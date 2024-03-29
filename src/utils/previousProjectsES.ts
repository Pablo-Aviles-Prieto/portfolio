/* eslint-disable max-len */
import { technologies } from '../enums/technologies'
import { IPreviousProjectObj } from '../interfaces'

const PUBLIC_URI = process.env.PUBLIC_URL || ''

export const previousProjectsES: IPreviousProjectObj[] = [
  {
    index: 0,
    images: [
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/experience.webp`,
        description: 'Visualización de la introducción del portfolio personal'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/aboutme.webp`,
        description: 'Visualización de la sección "Sobre mí"'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/intro.webp`,
        description: 'Visualización de la sección de experiencia laboral'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/sent-contact.webp`,
        description: 'Visualización de la respuesta en la sección de "Contáctame" tras enviar un mensaje'
      }
    ],
    title: 'portfolio',
    titleText: 'Portfolio personal',
    subtitle: 'Portfolio personal basado en el tema de Ubuntu 22.04 (Jammy Jellyfish)',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.javascript,
      technologies.html,
      technologies.css
    ],
    features: [
      `Efecto de escritura 🖊️ creado con la librería 'react-type-animation'`,
      `🦋 Estilado con 'styled-components' 🦋`,
      `Tema oscuro 🌙 y claro 💡 creado con 'styled-components'`,
      `'react-i18next' para manejar los idiomas 🇬🇧🇪🇸`,
      'Animaciones en CSS propias 🎥'
    ]
  },
  {
    index: 1,
    images: [
      {
        path: `${PUBLIC_URI}/images/prev-projects/dashboardMiranda/intro.webp`,
        description: 'Preview of the introduction on the portfolio page'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/dashboardMiranda/bookings-list-light.webp`,
        description: 'Preview of the about me section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/dashboardMiranda/room-details-dark.webp`,
        description: 'Preview of the experience section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/dashboardMiranda/users-list-light.webp`,
        description: 'Preview of the feedback on the form section after sending a message'
      }
    ],
    title: 'dashboardMiranda',
    titleText: 'Hotel Miranda dashboard',
    subtitle:
      'Personal portfolio themed as the Ubuntu 22.04 (Jammy Jellyfish)  themed as the Ubuntu 22.04 (Jammy Jellyfish)  themed as the Ubuntu 22.04',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
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
      '🦋 Styled with styled-components 🦋 🦋 Styled with styled-components 🦋 🦋 Styled with styled-components 🦋 🦋 Styled with styled-components 🦋 🦋 Styled with styled-components 🦋 🦋 Styled with styled-components 🦋',
      'Dark 🌙 and light 💡 theme created with styled-components',
      '🇬🇧🇪🇸 Languages',
      'Animations handled by myself with CSS heme created with styled-components heme created with styled-components heme created with styled-components heme created with sasd as das dasd asd as das da sdas da sdas MongoDB 🎥'
    ]
  },
  {
    index: 2,
    images: [
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/experience.webp`,
        description: 'Preview of the experience section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/intro.webp`,
        description: 'Preview of the introduction on the portfolio page'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/aboutme.webp`,
        description: 'Preview of the about me section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/sent-contact.webp`,
        description: 'Preview of the feedback on the form section after sending a message'
      }
    ],
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
  },
  {
    index: 3,
    images: [
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/intro.webp`,
        description: 'Preview of the introduction on the portfolio page'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/aboutme.webp`,
        description: 'Preview of the about me section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/experience.webp`,
        description: 'Preview of the experience section'
      },
      {
        path: `${PUBLIC_URI}/images/prev-projects/portfolio/sent-contact.webp`,
        description: 'Preview of the feedback on the form section after sending a message'
      }
    ],
    title: 'imgFinder',
    titleText: 'Img Finder',
    subtitle: 'Personal portfolio themed as the Ubuntu 22.04 (Jammy Jellyfish)',
    github: 'https://github.com/Pablo-Aviles-Prieto/portfolio',
    webpage: 'https://www.pabloaviles.es',
    technologies: [technologies.react, technologies.typescript, technologies.cypress],
    features: [
      `Typing effect 🖊️ created with 'react-type-animation' library`,
      '🦋 Styled with styled-components 🦋',
      'Dark 🌙 and light 💡 theme created with styled-components',
      '🇬🇧🇪🇸 Languages',
      'Animations handled by myself with CSS 🎥'
    ]
  }
]
