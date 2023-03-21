import { resources, defaultNS } from './src/utils/i18n'

declare module 'react-i18next' {
  type DefaultResources = (typeof resources)['en'][typeof defaultNS]

  interface Resources {
    en: {
      profileInfo: (typeof resources)['en']['profileInfo']
      aboutMe: (typeof resources)['en']['aboutMe']
      experience: (typeof resources)['en']['experience']
      dictionary: (typeof resources)['en']['dictionary']
      education: (typeof resources)['en']['education']
      contactMe: (typeof resources)['en']['contactMe']
      common: (typeof resources)['en']['common']
      prevProjects: (typeof resources)['en']['prevProjects']
    }
    es: {
      profileInfo: (typeof resources)['es']['profileInfo']
      aboutMe: (typeof resources)['es']['aboutMe']
      experience: (typeof resources)['es']['experience']
      dictionary: (typeof resources)['es']['dictionary']
      education: (typeof resources)['es']['education']
      contactMe: (typeof resources)['es']['contactMe']
      common: (typeof resources)['es']['common']
      prevProjects: (typeof resources)['es']['prevProjects']
    }
  }

  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: Resources
  }
}
