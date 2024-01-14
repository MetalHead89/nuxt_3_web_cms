declare module '#app' {
  interface NuxtApp {
    $fetchService: IFetchService,
    $api: IApi
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $fetchService: IFetchService,
    $api: IApi
  }
}

export {}
