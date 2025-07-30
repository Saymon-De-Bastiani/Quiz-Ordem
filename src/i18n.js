import { createI18n } from 'vue-i18n'
import messages from '@/locales/index.js'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'pt',
  fallbackLocale: 'pt',
  messages
})
