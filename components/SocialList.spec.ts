import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import SocialList from "@/components/SocialList.vue";
import Icon from "@/components/Icon.vue";

describe("SocialList", () => {
    const mockSocials = [
        { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
        { name: "Facebook", url: "https://facebook.com", icon: "facebook" }
    ];

    it("Affiche correctement une liste de liens", async () => {
        const wrapper = await mountSuspended(SocialList, {
            props: { socials: mockSocials }
        });

        const icons = wrapper.findAll("a");
        expect(icons.length).toBe(2);

        for (let i = 0; i < icons.length; i++) {
            expect(icons[i].text()).toBe(mockSocials[i].name);
            expect(icons[i].attributes("href")).toBe(mockSocials[i].url);
            expect(icons[i].attributes("title")).toBe(`Lien vers ${mockSocials[i].name}`);
        }
    });

    it("Affiche correctement une liste de liens avec des icônes", async () => {
        const wrapper = await mountSuspended(SocialList, {
            props: { socials: mockSocials }
        });

        const icons = wrapper.findAllComponents(Icon);
        expect(icons.length).toBe(2);
    });
});