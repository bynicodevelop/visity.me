<script setup lang="ts">
defineProps<{ src: string, alt?: string }>();
</script>

<template>
  <NuxtImg
    v-if="src"
    :src="src"
    :alt="alt || 'Avatar'"
  />
</template>

<style lang="scss" module scoped>
img {
    @apply size-52 rounded-full;
}
</style>