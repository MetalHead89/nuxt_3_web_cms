import { H3Event } from 'h3'
import jwt from '@/server/utils/jwt'

import { REFRESH_TOKEN_KEY } from '@/utils/constants'

export default async function(event: H3Event) {
  let refresh = getCookie(event, REFRESH_TOKEN_KEY)

  if (!refresh) {
    const body = await readBody(event)
    refresh = body[REFRESH_TOKEN_KEY]
  }
  try {
    const credentials = await jwt.refresh(refresh)
    return credentials
  } catch (error: any) {
    const message = error?.message || 'Unknown server error'

    return Promise.reject(createError(({
      statusCode: 400,
      message,
      statusMessage: message
    })))
  }
}
