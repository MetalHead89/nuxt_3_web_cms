<template>
  <div class="text-input">
    <input
      :type="type"
      v-bind="$attrs"
      class="input"
      required
      @input="handleTextInput"
    />
    <div class="underline" />
    <label class="label">
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['update:model-value'])
export interface Props {
  type?: 'text' | 'password',
  label?: string,
  modelValue?: string
}

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  modelValue: ''
})

const handleTextInput = (event: Event) => {
  emit('update:model-value', (event.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.text-input {
  position: relative;
  width: 100%;

  .input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid $gray;
    box-sizing: border-box;
    font-size: 1rem;

    @media screen and (min-width: $xxl) {
      padding: get-vw(10px) 0;
    }

    &:active,
    &:focus {
      outline: none;
    }

    &:focus ~ .label,
    &:valid ~ .label {
      top: 0;
      font-size: 0.7rem;
      color: $primary;
    }

    &:focus ~ .underline::before,
    &:valid ~ .underline::before {
      transform: scaleX(1);
    }
  }

  .underline {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;

    @media screen and (min-width: $xxl) {
      height: get-vw(2px);
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: $primary;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }
  }

  .label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    color: $muted;
    pointer-events: none;
    transition: all 0.3s ease;
  }
}
</style>
