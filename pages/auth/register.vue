<template>
  <NuxtLayout>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Créer un compte</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <AppFormRegister />
        <NuxtLink :to="{ name: 'auth' }">
          Vous avez déjà un compte ? Connectez-vous
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
