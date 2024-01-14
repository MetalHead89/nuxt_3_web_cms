// TODO: Add normal typing

import jwt from 'jsonwebtoken'

import { REFRESH_TOKEN_KEY } from '@/utils/constants'

const { jwtSecret } = useRuntimeConfig()
const accessTokenExpired = 1000 * 60
const refreshTokenExpired = 1000 * 60 * 60 * 24 * 360

const generateToken = (payload: any, expiresIn: string | number) => {
  // eslint-disable-next-line import/no-named-as-default-member
  return jwt.sign(
    payload,
    jwtSecret,
    {
      expiresIn
    }
  )
}

export default {
  createToken(payload: any, refresh = false) {
    try {
      return Promise.resolve({
        access_token: generateToken(payload, accessTokenExpired),
        access_token_expired_at: Math.floor(Date.now() / 1000) + accessTokenExpired,
        [REFRESH_TOKEN_KEY]: refresh ? generateToken(payload, refreshTokenExpired) : null
      })
    } catch {
      return Promise.reject(new Error('An error occurred while generating a token'))
    }
  },

  verifyToken(token: string) {
    try {
      // eslint-disable-next-line import/no-named-as-default-member
      return jwt.verify(token, jwtSecret)
    } catch {
      return false
    }
  },

  refresh(token: string | undefined) {
    if (!token) {
      return Promise.reject(new Error('Invalid token'))
    }

    const decode = this.verifyToken(token)

    if (!decode) {
      return Promise.reject(new Error('Invalid token'))
    }

    const { _id, name } = decode as { _id: string, name: string }

    return Promise.resolve(this.createToken({ _id, name }, true))
  }
}
