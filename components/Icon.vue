<script setup lang="ts">
defineProps<{
  icon: string,
  name?: string,
  fontSizeIcon?: number,
  color?: string,
}>();
</script>

<template>
  <font-awesome
    :icon="['fab', icon]"
    :style="{ fontSize: `${fontSizeIcon || 20}px`, color }"
  />
  <span class="sr-only">{{ name || 'Icon' }}</span>
</template>