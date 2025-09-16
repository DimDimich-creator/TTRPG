// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "TTRPG",
      // defaultLocale: "root",
      locales: {
        root: {
          label: "Русский",
          lang: "ru",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Гайды",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Навыки", slug: "guides/skills" },
            {
              label: "Проверки, инвентарь и статы",
              slug: "guides/checks-inventory-stats",
            },
            { label: "Боевая система", slug: "guides/combat-system" },
          ],
        },
      ],
    }),
  ],
});
