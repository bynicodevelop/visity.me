<script setup lang="ts">
defineProps<{
  label: string;
  type: string;
  name: string;
  id: string;
  prefix?: string;
  placeholder?: string;
  errors?: string[];
  autoComplete?: string;
  required?: boolean;
}>();

const model = defineModel<string>();
</script>

<template>
  <div class="grid">
    <FormLabel
      :label="label"
      :name="name"
      :required="required"
      :errors="errors"
    />
    <div class="mt-2">
      <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <span v-if="prefix">{{ prefix }}</span>
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
    </div>
    <FormErrorMessages :errors="errors ?? []" />
  </div>
</template>

<style lang="scss" scoped>
span {
  @apply shrink-0 select-none text-base text-gray-500 sm:text-sm/6;
}

input {
  @apply block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6;

  &[aria-invalid="true"] {
    @apply text-base text-red-600 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600;

  }
}
</style>