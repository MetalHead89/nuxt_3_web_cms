<template>
  <svg
    class="spinner"
    viewBox="0 0 100 100"
  >
    <circle
      cx="50"
      cy="50"
      r="40"
    />
  </svg>
</template>

<style lang="scss" scoped>
.spinner {
  animation: rotate 2s linear infinite;

  circle {
    fill: none;
    stroke-width: 7px;
    stroke: #ffffff;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    animation: 1.4s ease-in-out infinite both dash;
    stroke-dasharray: 283;
    stroke-dashoffset: 280;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }

  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }

  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
}
</style>
