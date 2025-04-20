// src/i18n/index.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import ru from './ru.json'
import ee from './ee.json'

i18n
  .use(initReactI18next) // подключаем i18next к React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      ee: { translation: ee }
    },
    lng: 'en', // язык по умолчанию
    fallbackLng: 'en', // если языка нет в переводах
    interpolation: {
      escapeValue: false // React уже экранирует
    }
  })

export default i18n
