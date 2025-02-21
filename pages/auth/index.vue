<script lang="ts" setup>

</script>

<template>
  <NuxtLayout>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Se connecter</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <AppFormLogin/>
        <NuxtLink
          :to="{ name: 'auth-register' }"
        >
          Vous n'avez pas de compte ? Créez-en un
        </NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
a {
  @apply mt-4 block text-center text-sm/5 text-gray-600 hover:text-gray-900;
}
</style>
