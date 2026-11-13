import { getWeather } from '../utils/data'
export default defineEventHandler(async () => { try { return await getWeather() } catch { throw createError({ statusCode: 503, statusMessage: 'Weather unavailable' }) } })
