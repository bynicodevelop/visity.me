<script setup lang="ts">
import type { FormMeta } from 'vee-validate';

defineProps<{
  optinPhrase: string;
  emailAttrs: Record<string, string>;
  errors: Record<string, string>;
  meta: FormMeta<{ email: string }>;
  submitForm: () => void;
}>();

const email = defineModel<string>();
</script>

<template>
  <form
    method="post"
    @submit.prevent="submitForm"
  >
    <p
      v-if="optinPhrase"
      class="lead"
    >{{ optinPhrase }}</p>

    <FormEmailInput
      id="email"
      v-model="email"
      name="email"
      :required="true"
      v-bind="emailAttrs"
      :errors="meta.touched && errors.email ? [errors.email] : []"
    />
    <ButtonPrimary
      label="Accéder"
      type="submit"
      :read-only="!meta.valid"
    />
  </form>
</template>