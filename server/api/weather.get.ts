import { getWeather } from '../utils/data'
import { fixtureWeather } from '../utils/e2e-fixtures'

export default defineEventHandler(async () => {
  if (useRuntimeConfig().portfolioE2eFixtures) return fixtureWeather
  try { return await getWeather() } catch { throw createError({ statusCode: 503, statusMessage: 'Weather unavailable' }) }
})
