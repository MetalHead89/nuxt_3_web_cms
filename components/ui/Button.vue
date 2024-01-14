<template>
  <button
    v-wave="!isLoading"
    v-bind="$attrs"
    :type="type"
    :disabled="isLoading"
    :class="classes"
  >
    <CmsSpinner v-if="isLoading" />
    <span class="content">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  type?: 'button' | 'submit'
  isLoading: boolean
}

const BASE_CLASS = 'button'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  isLoading: false
})

const classes = computed(() => {
  return [
    BASE_CLASS,
    props.isLoading && `${BASE_CLASS}_is-loading`
  ]
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
  position: relative;
  cursor: pointer;

  @media screen and (min-width: $xxl) {
    padding: get-vw(15px) get-vw(25px);
  }

  .spinner {
    position: absolute;
    height: 80%;
    top: 10%;
  }

  &_is-loading {
    .content {
      visibility: hidden;
    }
  }

  &:disabled {
    cursor: default;
  }
}
</style>
