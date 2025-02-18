import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import Footer from "./Footer.vue";

describe("Footer", () => {
    const siteName = "Mon site";
    const copyRightDate = "2024";

    it("Doit afficher le footer avec le nom du site", async () => {
        const wrapper = await mountSuspended(Footer, {
            props: { siteName }
        });

        const footer = wrapper.find("footer");
        const siteNameValue = footer.text();

        expect(siteNameValue).contains(siteName);
    });

    it("Doit afficher le footer avec l'année en cours", async () => {
        const wrapper = await mountSuspended(Footer, {
            props: { siteName, copyRightDate }
        });

        const footer = wrapper.find("footer");
        const copyRightDateValue = footer.text();

        expect(copyRightDateValue).contains(copyRightDate);
    });
});