import { REFRESH_TOKEN_KEY } from '@/utils/constants'

const REFRESH_API_PATH = '/api/auth/refresh'
const DEFAULT_REALM = 'api'
const REALMS_ENDPOINTS = {
  api: '/api'
}

export default defineNuxtPlugin(() => {
  const snackbar = useSnackbar()

  const createFullPath = (pathParams: TApiParams) => {
    if (typeof pathParams !== 'object') {
      throw new TypeError('Invalid path specified')
    }

    const endpoint = pathParams.isFullPath
      ? ''
      : REALMS_ENDPOINTS[pathParams.realm || DEFAULT_REALM]
    const path = pathParams.path || ''

    return `${endpoint}${path}`
  }

  const onResponseError = ({ response }: any) => {
    const errorMessage = response?._data?.data?.errorMessage

    snackbar.add({
      type: 'error',
      title: errorMessage ? 'Упс, произошла ошибка' : 'Произошла неизвестная ошибка',
      text: errorMessage || 'Пожалуйста, попробуйте позже'
    })
  }

  const onRequest = ({ request, options }: any) => {
    if (request === REFRESH_API_PATH && process.server) {
      const refreshCookie = useCookie(REFRESH_TOKEN_KEY)
      options.body = { [REFRESH_TOKEN_KEY]: refreshCookie?.value }
    }
  }

  const fetch = $fetch.create({ onResponseError, onRequest })

  const fetchService = {
    get: (path: TApiParams, params: TAnyObject | undefined) => fetch(createFullPath(path), { method: 'get', params }),
    post: (path: TApiParams, body: TAnyObject | undefined) => fetch(createFullPath(path), { method: 'post', body })
  }

  return {
    provide: {
      fetchService
    }
  }
})
