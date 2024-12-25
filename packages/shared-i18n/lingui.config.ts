import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "en",
  locales: ["th", "en"],
  rootDir: "../../",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["apps/**", "packages/**"],
    },
  ],
});
