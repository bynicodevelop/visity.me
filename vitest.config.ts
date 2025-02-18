import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
    test: {
        environment: "nuxt", // Active l'environnement Nuxt pour les tests
        environmentOptions: {
            nuxt: {
                domEnvironment: "happy-dom", // ou "jsdom"
            }
        }
    }
});
