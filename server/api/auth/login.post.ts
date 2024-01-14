// import checkAuth from '@/server/utils/checkAuth'
import authLoginController from '@/server/controllers/auth/login'

export default defineEventHandler(async event => {
  try {
    // await checkAuth(event)
    return await authLoginController(event)
  } catch (error: TResponseError) {
    sendError(event, error)
  }
})
