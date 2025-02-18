import { describe, it, expect, vi, beforeEach } from "vitest";
import { saveEmail } from "~/server/services/EmailService";

// Mock de Firestore
const mockFirestore = {
    collection: vi.fn().mockReturnThis(),
    doc: vi.fn().mockReturnThis(),
    collectionGroup: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    get: vi.fn(),
    add: vi.fn(),
};

// Mock de Firebase Admin
vi.mock("~/server/utils/firebase", () => ({
    useFirebaseAdmin: () => ({
        firestore: mockFirestore
    })
}));

describe("saveEmail", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("doit enregistrer un email si celui-ci n'existe pas", async () => {
        // Simule un résultat Firestore vide (email non existant)
        mockFirestore.get.mockResolvedValueOnce({
            empty: true
        });

        await saveEmail("test@example.com", "nicodevelop");

        expect(mockFirestore.where).toHaveBeenCalledWith("email", "==", "test@example.com");
        expect(mockFirestore.add).toHaveBeenCalledWith({
            email: "test@example.com",
            timestamp: expect.any(Object) // Vérifie que `timestamp` est défini
        });
    });

    it("ne doit pas enregistrer un email s'il existe déjà", async () => {
        mockFirestore.get.mockResolvedValueOnce({
            empty: false
        });

        await saveEmail("test@example.com", "nicodevelop");

        expect(mockFirestore.where).toHaveBeenCalledWith("email", "==", "test@example.com");
        expect(mockFirestore.add).not.toHaveBeenCalled(); 
    });

    it("doit gérer une erreur Firestore", async () => {
        mockFirestore.get.mockRejectedValueOnce(new Error("Firestore error"));

        await expect(saveEmail("test@example.com", "nicodevelop")).rejects.toThrow("Error saving email");
    });
});
