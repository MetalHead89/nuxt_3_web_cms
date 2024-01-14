import authRefreshController from '@/server/controllers/auth/refresh'

export default defineEventHandler(async event => {
  try {
    return await authRefreshController(event)
  } catch (error: TResponseError) {
    sendError(event, error)
  }
})
