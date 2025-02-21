<script setup lang="ts">
defineProps<{
  label: string;
  name: string;
  required?: boolean;
  errors?: string[];
}>();
</script>

<template>
  <label
    :class="{ 'error': errors && errors.length }"
    :for="name"
  >{{ label }} <span
    v-if="required"
    aria-hidden="true"
  >*</span></label>
</template>

<style lang="scss" scoped>
label {
  @apply text-sm/6 font-medium text-gray-900;

  &.error {
    @apply text-red-600;
  }
}
</style>