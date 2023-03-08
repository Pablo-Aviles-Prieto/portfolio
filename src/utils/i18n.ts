import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enAboutMe from '../locales/en/aboutme.json'
import esAboutMe from '../locales/es/aboutme.json'
import enExperience from '../locales/en/experience.json'
import esExperience from '../locales/es/experience.json'
import enProfileInfo from '../locales/en/profileInfo.json'
import esProfileInfo from '../locales/es/profileInfo.json'
import enDictionary from '../locales/en/dictionary.json'
import esDictionary from '../locales/es/dictionary.json'
import enEducation from '../locales/en/education.json'
import esEducation from '../locales/es/education.json'
import enContactMe from '../locales/en/contactMe.json'
import esContactMe from '../locales/es/contactMe.json'

export const defaultNS = 'ns1'

export const resources = {
  en: {
    dictionary: enDictionary,
    profileInfo: enProfileInfo,
    aboutMe: enAboutMe,
    experience: enExperience,
    education: enEducation,
    contactMe: enContactMe
  },
  es: {
    dictionary: esDictionary,
    profileInfo: esProfileInfo,
    aboutMe: esAboutMe,
    experience: esExperience,
    education: esEducation,
    contactMe: esContactMe
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
