import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProfile } from "~/server/services/ProfileService";

// Mock de Firebase Admin
const mockFirestore = {
    collection: vi.fn().mockReturnThis(),
    doc: vi.fn().mockReturnThis(),
    get: vi.fn(),
};

// Mock de Firebase Admin
vi.mock("~/server/utils/firebase", () => ({
    useFirebaseAdmin: () => ({
        firestore: mockFirestore
    })
}));

describe("getProfile", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit retourner un profil utilisateur valide", async () => {
        const mockData = { components: [{ type: "HeadingBio", props: { title: "Bienvenue" } }] };

        // Simule un document Firestore valide
        mockFirestore.get.mockResolvedValueOnce({
            exists: true,
            data: () => mockData
        });

        const result = await getProfile("nicodevelop");
        expect(result).toEqual(mockData);
    });

    it("doit retourner null si l'utilisateur n'existe pas", async () => {
        // Simule un document inexistant
        mockFirestore.get.mockResolvedValueOnce({
            exists: false
        });

        const result = await getProfile("inconnu");
        expect(result).toBeNull();
    });

    it("doit gérer une erreur Firestore", async () => {
        mockFirestore.get.mockRejectedValueOnce(new Error("Firestore error"));
        await expect(getProfile("nicodevelop")).rejects.toThrow("Error fetching user profile");
    });

});
