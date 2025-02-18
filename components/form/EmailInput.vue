<script lang="ts" setup>
defineProps<{
  id: string;
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  errors?: string[];
}>();

const model = defineModel<string>();
</script> 

<template>
  <div>
    <FormDefaultInput
      :id="id"
      v-model="model"
      :label="label || 'E-mail'"
      :placeholder="placeholder || 'E-mail'"
      :name="name"
      :required="required || false"
      :errors="errors"
      type="text"
      auto-complete="email"
      @update:model-value="model = $event"
    />
  </div>
</template>
