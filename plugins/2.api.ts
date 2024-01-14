import type { NuxtApp } from 'nuxt/app'
import auth from '@/api/auth'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('api', {
    auth: auth(nuxtApp as NuxtApp)
  })
})
