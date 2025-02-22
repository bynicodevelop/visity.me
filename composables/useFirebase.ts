import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, type Auth } from "firebase/auth";

export const errorMessages: Record<string, string> = {
    "auth/user-not-found": "Identifiants incorrect",
    "auth/wrong-password": "Identifiants incorrect",
    "auth/invalid-email": "E-mail invalide",
    "auth/too-many-requests": "Trop de tentatives de connexion",
};

export const useFirebase = () => {
    const { $auth } = useNuxtApp() as Partial<{ $auth: Auth }>;

    const isAuthenticating = async (): Promise<boolean> => {
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged($auth!, (user) => {
                unsubscribe();
                resolve(!!user);
            });
        });
    }

    const connectAccount = async (
        email: string,
        password: string
    ): Promise<void> => {
        const userCredentials = await signInWithEmailAndPassword(
            $auth!,
            email,
            password
        )

        if (!userCredentials.user) {
            throw new Error("Invalid credentials");
        }
    }

    const createAccount = async (
        email: string,
        password: string
    ): Promise<void> => {
        const userCredentials = await createUserWithEmailAndPassword(
            $auth!,
            email,
            password
        )

        if (!userCredentials.user) {
            throw new Error("Invalid credentials");
        }
    }

    const logout = async (): Promise<void> => {
        await signOut($auth!);
    }

    const getMe = async () => {
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged($auth!, (user) => {
                unsubscribe();
                if(!user) {
                    resolve(null);
                    return;
                }

                resolve({
                    id: user.uid,
                    email: user.email,
                });
            });
        });
    }

    return {
        isAuthenticating,
        connectAccount,
        createAccount,
        logout,
        getMe,
    }
};