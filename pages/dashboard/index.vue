<script lang="ts" setup>
const config = useRuntimeConfig();
const username = ref<string>('');
const bio = ref<string>('');
</script>

<template>
  <NuxtLayout name="dashboard">
    <FormPrefixedInput 
      id="username"
      v-model="username"
      :prefix="`${config.public.domain}/@`"
      name="username"
      label="Nom d'utilisateur"
      placeholder="JohnDoe"
      required
    />

    <FormTextarea 
      id="bio"
      v-model="bio"
      name="bio"
      label="Bio"
      placeholder="Je suis un développeur web passionné par les technologies modernes."
    />
  </NuxtLayout>
</template>
