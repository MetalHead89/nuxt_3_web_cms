import { H3Event } from 'h3'
import jwt from '@/server/utils/jwt'

const VERIFY_ERROR_MESSAGE = 'Invalid access token'

export default function(event: H3Event) {
  try {
    const authHeader = getHeader(event, 'authentication')

    if (!authHeader) {
      throw new Error(VERIFY_ERROR_MESSAGE)
    }

    const token = authHeader.split(' ')[1]

    if (!jwt.verifyToken(token)) {
      return new Error(VERIFY_ERROR_MESSAGE)
    }
  } catch {
    return Promise.reject(createError(({
      statusCode: 401,
      message: VERIFY_ERROR_MESSAGE,
      statusMessage: VERIFY_ERROR_MESSAGE
    })))
  }
}
