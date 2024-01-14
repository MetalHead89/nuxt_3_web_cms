import type { NuxtApp } from 'nuxt/app'

export default ({ $fetchService }: NuxtApp) => ({
  login: (params: TUser) => {
    return $fetchService.post(
      { path: '/auth/login' },
      { ...params }
    )
      .then((data: any) => data)
      .catch((error: any) => Promise.reject(error))
  },

  refresh: () => {
    return $fetchService.post(
      { path: '/auth/refresh' }
    )
      .then((data: any) => data)
      .catch((error: any) => Promise.reject(error))
  }
})
