<template>
  <div class="auth">
    <div class="form-wrapper">
      <h1 class="title">
        Авторизация
      </h1>

      <form
        class="form"
        @submit.prevent="handleFormSubmit"
      >
        <CmsTextInput
          v-model="form.name"
          label="Логин"
        />

        <CmsTextInput
          v-model="form.password"
          type="password"
          label="Пароль"
          autocomplete="new-password"
        />

        <CmsButton
          type="submit"
          :is-loading="isSubmit"
          class="login-button"
        >
          Войти
        </CmsButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { START_PAGE_PATH } from '@/utils/constants'
const { $api } = useNuxtApp()
const userStore = useUserStore()

const form = reactive({
  name: '',
  password: ''
})

const isSubmit = ref<boolean>(false)

definePageMeta({
  layout: 'empty'
})

const handleFormSubmit = () => {
  setIsSubmit(true)

  $api.auth.login(form)
    .then(({ token_data: tokenData, user }) => {
      userStore.setAccessTokenData(tokenData)
      userStore.setUser(user)
      navigateTo({ path: START_PAGE_PATH })
    })
    .finally(() => { setIsSubmit(false) })
}

const setIsSubmit = (value: boolean) => {
  isSubmit.value = value
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 50px;

  @media screen and (min-width: $xxl) {
      padding: get-vw(50px);
    }

  .form-wrapper {
    width: 100%;
    max-width: 400px;

    @media screen and (min-width: $sm) {
      border-radius: $base-border-radius;
      box-shadow: 0px 0px 20px 1px $gray;
      padding: 50px;
    }

    @media screen and (min-width: $xxl) {
      padding: get-vw(50px);
      max-width: get-vw(400px);
      border-radius: get-vw($base-border-radius);
      box-shadow: 0px 0px get-vw(20px) get-vw(1px) $gray;
    }
  }

  .title {
    text-align: center;
    margin-top: 0;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: $xxl) {
      gap: get-vw(40px);
    }
  }

  .login-button {
    width: 100%;
  }
}
</style>
