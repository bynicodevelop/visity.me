<script setup lang="ts">
const {
  meta,
  errors,
  fields: { email, password },
  fieldsAttrs: { emailAttrs, passwordAttrs },
  submitForm
} = useAuthRegister();
</script>

<template>
  <form
    action="post"
    @submit.prevent="submitForm"
  >
    <FormEmailInput
      id="email"
      v-model="email"
      label="E-mail"
      placeholder="Entrez votre adresse email"
      name="email"
      v-bind="emailAttrs"
      :required="true"
      :errors="meta.touched && errors.email ? [errors.email] : []"
    />

    <FormPasswordInput
      id="password"
      v-model="password"
      label="Mot de passe"
      placeholder="Enter votre mot de passe"
      name="password"
      v-bind="passwordAttrs"
      :required="true"
      :errors="meta.touched && errors.password ? [errors.password] : []"
    />

    <ButtonPrimary
      type="submit"
      label="Créer un compte"
      :read-only="!meta.valid"
    />
  </form>
</template>