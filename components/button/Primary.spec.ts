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
});