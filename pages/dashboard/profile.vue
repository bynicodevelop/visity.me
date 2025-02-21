<script lang="ts" setup>
const router = useRouter();
const { logout } = useFirebase();

const onLogout = async () => {
  await logout();
  router.push({ name: 'index' });
};
</script>

<template>
  <NuxtLayout name="dashboard">
    <ButtonPrimary 
      label="Logout"
      @click="onLogout"
    />
  </NuxtLayout>
</template>