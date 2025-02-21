<script setup lang="ts">
defineProps<{
    errors: string[];
}>();
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="transition duration-500 ease-out transform"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-500 ease-in transform"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    
    <div
      v-if="errors && errors.length"
    >
      <template
        v-for="error in errors"
        :key="error"
      >
        <p>{{ error }}</p>
      </template>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
p {
  @apply mt-1 text-sm/6 text-red-600;
}
</style>