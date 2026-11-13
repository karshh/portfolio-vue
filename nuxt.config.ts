// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  runtimeConfig: { turnstileSecretKey: '', resendApiKey: '', contactToEmail: '', contactFromEmail: '', public: { turnstileSiteKey: '' } },
  nitro: { routeRules: { '/**': { headers: { 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', 'X-Frame-Options': 'DENY' } } } }
})
