import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const tokenData = ref<null | TAccessTokenData>(null)
  const user = ref<null | TUserData>(null)

  function setAccessTokenData(data: TAccessTokenData) {
    tokenData.value = data
  }

  function setUser(data: TUserData) {
    user.value = data
  }

  return { user, tokenData, setAccessTokenData, setUser }
})
