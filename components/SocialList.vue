<script setup lang="ts">
import type { Socials } from '~/types/socials';

defineProps<{ socials: Socials[], fontSizeIcon?: number }>();
</script>

<template>
  <ul>
    <template
      v-for="{ name, url, icon } in socials"
      :key="name"
    >
      <li>
        <a
          :href="url"
          :aria-label="`Lien vers ${name}`"
          :title="`Lien vers ${name}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            :icon="icon"
            :name="name"
            :font-size-icon="fontSizeIcon"
            :color="`var(--color-${name.toLowerCase()})`"
          />
        </a>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" module>
ul {
    @apply flex space-x-4 items-center justify-center;
}
</style>