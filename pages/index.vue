<script setup lang="ts">
const headingValues = ref<{
  title: string;
  description: string;
}>({
  title: 'Visity connecte les créateurs de contenu à leur audience',
  description: 'Visity transforme chaque interaction en opportunité en connectant les créateurs à leur audience. Centralise ta présence, engage tes abonnés et monétise ton contenu en un seul endroit.',
})
</script>

<template>
  <NuxtLayout>
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 class="max-w-2xl lg:col-span-2 xl:col-auto">{{  headingValues.title }}</h1>
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p class="lead">{{ headingValues.description }}</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            alt=""
            class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
          >
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

