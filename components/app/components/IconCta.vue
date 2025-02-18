<script setup lang="ts">
defineProps<{
  link: string,
}>();
</script>

<template>
  <div>
    <Icon
      :icon="'telegram'"
      name="telegram"
      :font-size-icon="92"
      color="var(--color-telegram)"
    />

    <div>
      <h2>Accès immédiat</h2>
        
      <p class="lead">N'attends pas de recevoir le mail, accès au canal Telegram maintenant !</p>

      <a
        :href="link"
        target="_blank"
      >
        Accéder au Télégram <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div:first-child {
    @apply grid grid-cols-[1fr,3fr] gap-4 place-items-center items-center;

    h2 {
      @apply text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl;
    }

    a {
      @apply mt-4 flex gap-x-6 text-sm/6 font-semibold text-gray-900;
    }
}
</style>