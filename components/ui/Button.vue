<template>
  <button
    v-wave
    v-bind="$attrs"
    type="button"
    class="button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface Props {
  type?: 'button' | 'submit'
}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<Props>(), {
  type: 'button'
})
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 25px;
  border: none;
  background: $primary;
  color: white;
  font-weight: 800;
  border-radius: $base-border-radius;

  @media screen and (min-width: $xxl) {
    padding: get-vw(15px) get-vw(25px);
  }
}
</style>
