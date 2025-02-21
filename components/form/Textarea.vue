<script setup lang="ts">
defineProps<{
    label: string;
    name: string;
    id: string;
    placeholder?: string;
    errors?: string[];
    required?: boolean;
}>();

const model = defineModel<string>()
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
      <textarea
        :id="id"
        v-model="model"
        :name="name"
        :placeholder="placeholder"
        v-bind="required !== undefined && required !== false ? { required: true, 'aria-required': 'true' } : {}"
        rows="3"
        @update:model-value="model = $event"
      />
    </div>
    <FormErrorMessages :errors="errors ?? []" />
  </div>
</template>

<style lang="scss" scoped>
textarea {
    @apply block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6;
}
</style>