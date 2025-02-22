import { ButtonPrimary } from "#components";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

describe("Primary Button", () => {
  it("Doit afficher un label et que le type est button", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",

      },
    });

    const button = wrapper.find("button");
    expect(button.text()).toContain("Primary Button");
    expect(button.attributes("type")).toBe("button");
    expect(button.attributes()).not.toHaveProperty("disabled");
  });

  it("Doit afficher un label et que le type est submit", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        type: "submit",
      },
    });

    const button = wrapper.find("button");
    expect(button.text()).toContain("Primary Button");
    expect(button.attributes("type")).toBe("submit");
    expect(button.attributes()).not.toHaveProperty("disabled");
  });

  it("Doit afficher un label et que le type est reset", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        type: "reset",
      },
    });

    const button = wrapper.find("button");
    expect(button.text()).toContain("Primary Button");
    expect(button.attributes("type")).toBe("reset");
    expect(button.attributes()).not.toHaveProperty("disabled");
  });

  it("Doit afficher un bouton qui est disabled", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        readOnly: true,
      },
    });

    const button = wrapper.find("button");
    expect(button.text()).toContain("Primary Button");
    expect(button.attributes()).toHaveProperty("disabled");
  });

  it("Doit appliquer la classe de couleur par défaut (primary)", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("bg-indigo-600");
    expect(button.classes()).toContain("hover:bg-indigo-500");
    expect(button.classes()).toContain("focus-visible:outline-indigo-600");
  });

  it("Doit appliquer la couleur secondary", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        color: "secondary",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("bg-white");
    expect(button.classes()).toContain("shadow-sm");
    expect(button.classes()).toContain("ring-1");
    expect(button.classes()).toContain("ring-gray-300");
  });

  it("Doit appliquer la couleur danger", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        color: "danger",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("bg-red-600");
    expect(button.classes()).toContain("hover:bg-red-500");
    expect(button.classes()).toContain("focus-visible:outline-red-600");
  });

  it("Doit appliquer la couleur warning", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        color: "warning",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("bg-yellow-600");
    expect(button.classes()).toContain("hover:bg-yellow-500");
    expect(button.classes()).toContain("focus-visible:outline-yellow-600");
  });

  it("Doit appliquer la couleur success", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        color: "success",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("bg-green-600");
    expect(button.classes()).toContain("hover:bg-green-500");
    expect(button.classes()).toContain("focus-visible:outline-green-600");
  });

  it("Doit appliquer la taille sm", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        size: "sm",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("px-2.5");
    expect(button.classes()).toContain("py-1.5");
    expect(button.classes()).toContain("text-sm");
  });

  it("Doit appliquer la taille md (par défaut)", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("px-3");
    expect(button.classes()).toContain("py-1.5");
    expect(button.classes()).toContain("text-sm/6");
  });

  it("Doit appliquer la taille lg", async () => {
    const wrapper = await mountSuspended(ButtonPrimary, {
      props: {
        label: "Primary Button",
        size: "lg",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes()).toContain("px-4");
    expect(button.classes()).toContain("py-2");
    expect(button.classes()).toContain("text-base");
  });
});