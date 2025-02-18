<script setup lang="ts">
const { components } = useProfile();
const { resolveComponent } = useDynamicComponent();
</script>

<template>
  <NuxtLayout name="profile">
    <template
      v-for="(component, index) in components"
      :key="index"
    >
      <AppSectionsWrapper>
        <component
          :is="resolveComponent(component.type)"
          v-bind="component.props"
        />
      </AppSectionsWrapper>
    </template>
  </NuxtLayout>
</template>


