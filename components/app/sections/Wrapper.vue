<template>
  <section>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply flex flex-col items-stretch space-y-4 py-8 px-4;
}
</style>