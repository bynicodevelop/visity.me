import { useFirebaseAdmin } from '~/server/utils/firebase';
import { PROFILES } from '~/types/collections';
import type { Component } from '~/types/component';
import { error } from 'firebase-functions/logger';

export const getProfile = async (username: string): Promise<{ components: Component[] } | null> => {
  const { firestore } = useFirebaseAdmin();

  try {
    const results = await firestore
      .collection(PROFILES)
      .doc(username)
      .get();

    if (!results.exists) return null;

    const { components } = results.data() as { components: Component[] };
    return { components };
  } catch (e) {
    error("Firestore Error:", e);
    throw new Error("Error fetching user profile");
  }
};

export const createOrUpdateProfile = async (username: string, bio: string): Promise<void> => {
  const { firestore } = useFirebaseAdmin();

  try {
    await firestore
      .collection(PROFILES)
      .doc(username.toLocaleLowerCase())
      .set({ bio }, { merge: true });
  } catch (e) {
    error("Firestore Error:", e);
    throw new Error("Error creating or updating user profile");
  }
}