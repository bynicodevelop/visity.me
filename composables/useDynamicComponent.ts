const componentsMap: Record<string, unknown> = {
  HeadingBio: defineAsyncComponent(() => import('~/components/app/components/HeadingBio.vue')),
  AppFormOptin: defineAsyncComponent(() => import('~/components/app/components/AppFormOptin.vue')),
  IconCta: defineAsyncComponent(() => import('~/components/app/components/IconCta.vue')),
}

export const useDynamicComponent = () => {
  const resolvedComponents = shallowRef<Record<string, unknown>>(componentsMap);

  const resolveComponent = (type: string) => resolvedComponents.value[type] || null
  return { resolveComponent }
}
