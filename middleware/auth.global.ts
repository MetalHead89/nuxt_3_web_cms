const checkTokenExpiration = ({ expired }: TAccessTokenData) => {
  return Math.floor(Date.now() / 1000) < expired
}

export default defineNuxtRouteMiddleware(async to => {
  if (to.name === 'login') {
    return
  }

  const userStore = useUserStore()
  const { $api } = useNuxtApp()

  if (process.browser && userStore.user && userStore.tokenData && checkTokenExpiration(userStore.tokenData)) {
    return
  }

  try {
    const { token_data: tokenData, user } = await $api.auth.refresh()
    userStore.setAccessTokenData(tokenData)
    userStore.setUser(user)
  } catch (e) {
    return navigateTo({ name: 'login' })
  }
})
