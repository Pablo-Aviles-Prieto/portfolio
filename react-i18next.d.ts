import { resources, defaultNS } from './src/utils/i18n'

declare module 'react-i18next' {
  type DefaultResources = (typeof resources)['en'][typeof defaultNS]

  interface Resources {
    en: {
      aboutMe: (typeof resources)['en']['aboutMe']
      experience: (typeof resources)['en']['experience']
    }
    es: {
      aboutMe: (typeof resources)['es']['aboutMe']
      experience: (typeof resources)['es']['experience']
    }
  }

  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: Resources
  }
}
