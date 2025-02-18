import { useFirebaseAdmin } from '~/server/utils/firebase';
import { FieldValue } from "firebase-admin/firestore";
import { error, info } from "firebase-functions/logger";
import { EMAILS, PROFILES } from "~/types/collections";

export const saveEmail = async (email: string, username: string): Promise<void> => {
    try {
        const { firestore } = useFirebaseAdmin();
        const profileEmails = firestore
            .collection(PROFILES)
            .doc(username)
            .collection(EMAILS);

        const result = await profileEmails
            .where('email', '==', email)
            .get();

        if (!result.empty) {
            info("Email already exists");
            return;
        }

        await profileEmails.add({
            email,
            timestamp: FieldValue.serverTimestamp(),
        });
    } catch (e) {
        error("Firestore Error:", e);
        throw new Error("Error saving email");
    }
};