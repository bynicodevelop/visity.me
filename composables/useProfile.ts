import type { Component } from "~/types/component";

export const useProfile = () => {
  const { params } = useRoute();
  const username = computed(() => params.username);

  const { data } = useAsyncData<{ components: Component[] }>(
    "user-profile",
    () => $fetch("/api/profile", { query: { username: username.value } })
  );

  return { components: computed(() => data.value?.components || []) };
};