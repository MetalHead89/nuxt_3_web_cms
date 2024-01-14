import { MongooseError } from 'mongoose'
import { sha512 } from 'js-sha512'
import { H3Event } from 'h3'
import { User } from '@/server/models/user'
import jwt from '@/server/utils/jwt'

import { REFRESH_TOKEN_KEY } from '@/utils/constants'

const { passwordSpice } = useRuntimeConfig()

const createIncorrectLoginError = () => {
  const message = 'Incorrect login data'

  return Promise.reject(createError(({
    statusCode: 400,
    data: {
      errorMessage: 'Неверный логин или пароль'
    },
    message,
    statusMessage: message
  })))
}

export default async function(event: H3Event) {
  try {
    const { name, password } = await readBody(event)
    const user = await User.findOne({ name })

    if (!user) {
      return createIncorrectLoginError()
    }

    if (user.password !== sha512(password + passwordSpice)) {
      return createIncorrectLoginError()
    }

    const {
      access_token: accessToken,
      access_token_expired_at: accessExpired,
      [REFRESH_TOKEN_KEY]: refreshToken
    } = await jwt.createToken({ _id: user._id, name: user?.name }, true)

    if (refreshToken) {
      setCookie(
        event,
        REFRESH_TOKEN_KEY,
        refreshToken,
        {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 360),
          httpOnly: true
        }
      )
    }

    const credentials = {
      token_data: { access_token: accessToken, expired: accessExpired },
      user: { id: user.id, name: user.name }
    }

    return Promise.resolve(credentials)
  } catch (error: any) {
    // TODO: Write error to log
    const message = error instanceof MongooseError
      ? 'Error retrieving data from database'
      : 'Unknown server error'

    return Promise.reject(createError({
      statusCode: 500,
      message,
      statusMessage: message
    }))
  }
}
