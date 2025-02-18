<script setup lang="ts">
defineProps<{
    label: string;
    type?: 'button' | 'submit' | 'reset';
    readOnly?: boolean;
}>();
</script>

<template>
  <div>
    <button
      :type="type || 'button'"
      :disabled="readOnly || false"
    >
      {{ label }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
    @apply block w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;

    &:disabled {
        @apply bg-gray-300 text-gray-500 cursor-not-allowed;
    }
}
</style>