<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <slot />
    </main>

    <Footer
      :site-name="config.public.siteName"
      :copy-right-date="config.public.copyRightDate"
    />
  </div>
</template>
