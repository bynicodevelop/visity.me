<script lang="ts" setup>
import { FormImageInput } from '#components';

const { domain, fields: { username, bio } , submitForm} = useDashbordPublicProfile();

watch(username, (value) => {
  console.log(value);
});

const onChange = (file: File) => {
  console.log(file);
};
</script>

<template>
  <NuxtLayout name="dashboard">
    <form
      action="post"
      @submit.prevent="submitForm"
    >
      <FormPrefixedInput 
        id="username"
        v-model="username"
        :prefix="`${domain}/@`"
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

      <FormImageInput
        id="avatar"
        name="avatar"
        label="Avatar"
        required
        @change="onChange"
      />

      <ButtonPrimary
        type="submit"
        label="Enregistrer"
      />
    </form>
  </NuxtLayout>
</template>
