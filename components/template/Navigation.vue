<script lang="ts" setup>
import type { NavigationItem } from '~/types/template';

defineProps<{
  menu: NavigationItem[];
}>();

const open = ref(false);
</script>

<template>
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="open = !open"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <svg
              class="block size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              class="hidden size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="{ name, title } in menu"
              :key="name"
              :to="{ name }"
              class="link"
              :class="{ 'current': name === $route.name }"
            >
              {{ title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[500px]"
      leave-active-class="transition-all duration-300 ease-out"
      leave-from-class="opacity-100 max-h-[500px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-show="open"
        id="mobile-menu"
        class="sm:hidden"
      >
        <div class="space-y-1 pb-4 pt-2">
          <NuxtLink
            v-for="{ name, title } in menu"
            :key="name"
            :to="{ name }"
            class="link"
            :class="{ 'current': name === $route.name }"
          >
            {{ title }}
          </NuxtLink>
        </div>
    
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  @apply inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm hover:border-gray-300 hover:text-gray-700;
}

.current {
  @apply border-indigo-500 text-gray-900 font-medium;
}

#mobile-menu {
  .link {
    @apply block border-l-4 py-2 pl-3 pr-4 text-base text-gray-500 border-b-0;
  }

  .current {
    @apply bg-indigo-50 border-indigo-500 text-indigo-700 font-medium;
  }
}
</style>