<script setup lang="ts">
const {
  errorMessage,
  meta,
  errors,
  fields: { email, password },
  fieldsAttrs: { emailAttrs, passwordAttrs },
  submitForm
} = useAuthLogin();
</script>

<template>
  <form
    action="post"
    @submit.prevent="submitForm"
  >
    <FormEmailInput
      id="email"
      v-model="email"
      label="Email address"
      placeholder="Enter your email address"
      name="email"
      v-bind="emailAttrs"
      :required="true"
      :errors="meta.touched && errors.email ? [errors.email] : []"
    />

    <FormPasswordInput
      id="password"
      v-model="password"
      label="Password"
      placeholder="Enter your password"
      name="password"
      v-bind="passwordAttrs"
      :required="true"
      :errors="meta.touched && errors.password ? [errors.password] : []"
    />

    <ButtonPrimary
      type="submit"
      label="Sign in"
      :read-only="!meta.valid"
    >
      Sign in
    </ButtonPrimary>

    <FormErrorMessages
      :errors="errorMessage ? [errorMessage] : []"
    />
  </form>
</template>