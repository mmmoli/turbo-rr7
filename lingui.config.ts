import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "en",
  locales: ["th", "en"],
  catalogs: [
    {
      path: "<rootDir>/packages/shared-i18n/locales/{locale}",
      include: ["apps", "packages"],
      exclude: ["**/node_modules/**", "**/build/**", "**/dist/**"],
    },
  ],
});
