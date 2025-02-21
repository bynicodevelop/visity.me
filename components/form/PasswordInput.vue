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
      :label="label || 'Mot de passe'"
      :placeholder="placeholder || 'Mot de passe'"
      :name="name"
      :required="required || false"
      :errors="errors"
      type="password"
      auto-complete="password"
      @update:model-value="model = $event"
    />
  </div>
</template>
