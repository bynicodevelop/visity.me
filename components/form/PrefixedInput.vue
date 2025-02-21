<script lang="ts" setup>
defineProps<{
  id: string;
  name: string;
  prefix: string;
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
      :label="label || 'Nom d\'utilisateur'"
      :placeholder="placeholder || 'JohnDoe'"
      :prefix="prefix"
      :name="name"
      :required="required || false"
      :errors="errors"
      type="text"
      @update:model-value="model = $event"
    />
  </div>
</template>
