<template>
  <div class="auth">
    <div class="form-wrapper">
      <h1 class="title">
        Авторизация
      </h1>

      <form
        action=""
        class="form"
      >
        <CmsTextInput label="Логин" />

        <CmsTextInput
          type="password"
          label="Пароль"
          autocomplete="new-password"
        />

        <CmsButton class="login-button">
          Войти
        </CmsButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty'
})
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
