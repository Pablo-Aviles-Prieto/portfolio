import { resources, defaultNS } from './src/utils/i18n'

declare module 'react-i18next' {
  type DefaultResources = (typeof resources)['en'][typeof defaultNS]

  interface Resources {
    en: {
      profileInfo: (typeof resources)['en']['profileInfo']
      aboutMe: (typeof resources)['en']['aboutMe']
      experience: (typeof resources)['en']['experience']
      dictionary: (typeof resources)['en']['dictionary']
    }
    es: {
      profileInfo: (typeof resources)['es']['profileInfo']
      aboutMe: (typeof resources)['es']['aboutMe']
      experience: (typeof resources)['es']['experience']
      dictionary: (typeof resources)['en']['dictionary']
    }
  }

  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: Resources
  }
}
