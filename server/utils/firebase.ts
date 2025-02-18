import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import admin from "firebase-admin";
import { info } from "firebase-functions/logger";

let firestore: FirebaseFirestore.Firestore;

export function useFirebaseAdmin() {
    info("Initializing Firebase Admin");
    const databaseId = process.env.NODE_ENV === "production" ? "virtualcard" : "(default)";

    if (!getApps().length) {
        initializeApp({
            credential: admin.credential.applicationDefault(),
        });

        info("Firebase Admin initialized");
        firestore = getFirestore(databaseId);

        if (process.env.NODE_ENV === "development") {
            firestore.settings({ host: "localhost:8080", ssl: false });
        }
    } else {
        firestore = getFirestore(getApp(), databaseId);
        info("Firestore already initialized");
    }

    return { firestore };
}

