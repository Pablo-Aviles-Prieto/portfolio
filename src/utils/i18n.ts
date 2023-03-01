import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enAboutMe from '../locales/en/aboutme.json'
import esAboutMe from '../locales/es/aboutme.json'
import enExperience from '../locales/en/experience.json'
import esExperience from '../locales/es/experience.json'
import enProfileInfo from '../locales/en/profileInfo.json'
import esProfileInfo from '../locales/es/profileInfo.json'

export const defaultNS = 'ns1'

export const resources = {
  en: {
    profileInfo: enProfileInfo,
    aboutMe: enAboutMe,
    experience: enExperience
  },
  es: {
    profileInfo: esProfileInfo,
    aboutMe: esAboutMe,
    experience: esExperience
  }
} as const

// eslint-disable-next-line no-void
void i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['ns1', 'ns2'],
  defaultNS,
  resources
})

export default i18n
