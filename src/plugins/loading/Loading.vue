<template>
  <div class="loading">
    <svg
        class="loading-svg hover"
        width="100"
        height="100"
        viewBox="0 0 40 60"
    >
        <polygon
            class="triangulo"
            fill="none"
            stroke="#fff"
            stroke-width="1"
            points="16,1 32,32 1,32"
        />
        <text class="text" x="0" y="45" fill="#fff">{{ msg.value }}</text>
    </svg>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    required: true
  },
})
</script>
<style lang="sass" scoped>
.loading
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0,0,0,.2)
  display: flex
  justify-content: center
  align-items: center
  .loading-svg
    z-index: 9
    .text
      font-family: arial
      font-size: 7px
      animation: blink .9s ease-in-out infinite
    .triangulo
      stroke-dasharray: 17
      animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite

@keyframes dash
  to
    stroke-dashoffset: 136

@keyframes blink
  50%
    opacity: 0
</style>