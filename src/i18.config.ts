import enCommon from './locales/en.common.json'
import enArt from './locales/en.art.json'
import plCommon from './locales/pl.common.json'
import plArt from './locales/pl.art.json'


export const i18config = {
  interpolation: { 
    escapeValue: false 
  },
  lng: 'pl',
  fallbackLng: ['en', 'pl'],
  resources: {
    en: {
      common: enCommon,
      art: enArt
    },
    pl: {
      common: plCommon,
      art: plArt
    },
  },
}