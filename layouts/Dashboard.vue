<script lang="ts" setup>
const menu = [
  { title: 'Dashboard', name: 'dashboard' },
  { title: 'Profil', name: 'dashboard-profile' },
];
</script>
<template>
  <div>
    <TemplateNavigation :menu="menu" />
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  @apply mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ;
}
</style>