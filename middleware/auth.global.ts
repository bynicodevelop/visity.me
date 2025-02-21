export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return
  const { isAuthenticating } = useFirebase();
  const isAuthenticated = await isAuthenticating();

  if ((to.name === "auth-register" || to.name === "auth") && isAuthenticated) return navigateTo({ name: "dashboard" });
  if (to.name === "dashboard" && !isAuthenticated) return navigateTo({ name: "auth" });
})
