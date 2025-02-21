import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import DefaultInput from "./DefaultInput.vue";

describe("Default Input", () => {
    const baseProps = {
        label: "Nom d'utilisateur",
        type: "text",
        name: "username",
        id: "username",
        placeholder: "Entrez votre nom",
        autoComplete: "username",
    };

    it("Affiche le label correctement", async () => {
        const wrapper = await mountSuspended(DefaultInput, {
            props: baseProps
        });

        const label = wrapper.find("label");
        expect(label.text()).toContain("Nom d'utilisateur");
        expect(label.attributes("for")).toBe("username");
    });

    it("Affiche un champ de type text avec les bons attributs", async () => {
        const wrapper = await mountSuspended(DefaultInput, {
            props: baseProps
        });

        const input = wrapper.find("input");
        expect(input.exists()).toBe(true);
        expect(input.attributes("type")).toBe("text");
        expect(input.attributes("name")).toBe("username");
        expect(input.attributes("id")).toBe("username");
        expect(input.attributes("placeholder")).toBe("Entrez votre nom");
        expect(input.attributes("autocomplete")).toBe("username");

        expect(input.attributes("required")).toBeUndefined();
        expect(input.attributes("aria-required")).toBeUndefined();
    });

    it("Ajoute `required` et `aria-required` si nécessaire", async () => {
        const wrapper = await mountSuspended(DefaultInput, {
            props: { ...baseProps, required: true }
        });

        const input = wrapper.find("input");
        expect(input.attributes("required")).toBeDefined();
        expect(input.attributes("aria-required")).toBeDefined();

        // Vérifier si l'astérisque (*) est bien affiché pour le required
        const label = wrapper.find("label");
        expect(label.text()).toContain("*");
    });

    it("Affiche les erreurs et applique `aria-invalid`", async () => {
        const errors = ["Ce champ est obligatoire"];
        const wrapper = await mountSuspended(DefaultInput, {
            props: { ...baseProps, errors }
        });

        const input = wrapper.find("input");
        expect(input.attributes("aria-invalid")).toBeDefined();

        const errorMessages = wrapper.findAll("p");
        expect(errorMessages.length).toBe(1);
        expect(errorMessages[0].text()).toBe(errors[0]);
    });

    it("Ne met pas `aria-invalid` si aucune erreur", async () => {
        const wrapper = await mountSuspended(DefaultInput, {
            props: baseProps
        });

        const input = wrapper.find("input");
        expect(input.attributes("aria-invalid")).toBeUndefined();
    });
});