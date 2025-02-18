<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div>
    <main class="flex-grow">
      <slot />
    </main>

    <Footer
      :site-name="config.public.siteName"
      :copy-right-date="config.public.copyRightDate"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  @apply flex flex-col min-h-screen w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/3 mx-auto;
}
</style>