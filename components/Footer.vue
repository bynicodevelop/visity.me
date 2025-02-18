<script setup lang="ts">
defineProps<{
  siteName: string;
  copyRightDate?: string;
}>();
</script>

<template>
  <footer>
    <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <p>
        &copy; {{ copyRightDate }} {{ siteName }}. Tout droits réservés.
      </p>
    </div>
  </footer>
</template>

<style lang="scss" module scoped>
footer {
  div {
    @apply mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8;

    p {
      @apply mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0
    }
  }
}
</style>