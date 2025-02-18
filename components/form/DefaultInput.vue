<script setup lang="ts">
defineProps<{
  label: string;
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  errors?: string[];
  autoComplete?: string;
  required?: boolean;
}>();

const model = defineModel<string>();
</script>

<template>
  <div>
    <label
      :class="{ 'error': errors && errors.length }"
      :for="name"
    >{{ label }} <span
      v-if="required"
      aria-hidden="true"
    >*</span></label>
    <div class="mt-2">
      <input
        :id="id"
        v-model="model"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :autocomplete="autoComplete"
        :aria-invalid="errors && errors.length"
        v-bind="required !== undefined && required !== false ? { required: true, 'aria-required': 'true' } : {}"
        @update:model-value="model = $event"
      >
    </div>
    <template
      v-for="error in errors"
      :key="error"
    >
      <p
        v-if="error"
        :id="`${id}-error`"
      >
        {{ error }}
      </p>
    </template>

  </div>
</template>

<style lang="scss" scoped>
div {
  @apply grid;
}

label {
  @apply text-sm/6 font-medium text-gray-900;

  &.error {
    @apply text-red-600;
  }
}

input {
  @apply w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6;

  &[aria-invalid="true"] {
    @apply text-base text-red-600 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600;

  }
}

p {
  @apply mt-1 text-sm/6 text-red-600;
}
</style>