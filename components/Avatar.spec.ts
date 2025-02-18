import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Avatar from "@/components/Avatar.vue";

describe("Avatar", () => {
    it("Affiche une image avec un src defini", async () => {
        const wrapper = await mountSuspended(Avatar, {
            props: { src: "https://example.com/avatar.jpg" }
        });

        const img = wrapper.find("img");
        expect(img.exists()).toBe(true);
        expect(img.attributes("src")).toBe("https://example.com/avatar.jpg");
    });

    it("N'affiche pas d'image si src n'est pas defini", async () => {
        const wrapper = await mountSuspended(Avatar);

        const img = wrapper.find("img");
        expect(img.exists()).toBe(false);
    });

    it("Doit afficher le texte par defaut si alt n'est pas defini", async () => {
        const wrapper = await mountSuspended(Avatar, {
            props: { src: "https://example.com/avatar.jpg" }
        });

        const img = wrapper.find("img");
        expect(img.attributes("alt")).toBe("Avatar");
    });

    it("Doit afficher le texte alt si defini", async () => {
        const wrapper = await mountSuspended(Avatar, {
            props: { src: "https://example.com/avatar.jpg", alt: "Photo de profil" }
        });

        const img = wrapper.find("img");
        expect(img.attributes("alt")).toBe("Photo de profil");
    });
});