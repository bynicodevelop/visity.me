import { getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
    const {
        API_KEY,
        AUTH_DOMAIN,
        PROJECT_ID,
        STORAGE_BUCKET,
        MESSAGING_SENDER_ID,
        APP_ID,
        MEASUREMENT_ID
    } = useAppConfig() as Record<string, string>;

    let app;

    if (getApps().length === 0) {
        app = initializeApp({
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID,
            appId: APP_ID,
            measurementId: MEASUREMENT_ID,
        });
    } else {
        app = getApps()[0];
    }

    const auth = getAuth(app);

    if (process.env.NODE_ENV === 'development') {
        connectAuthEmulator(auth, "http://localhost:9099");
    }

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
})