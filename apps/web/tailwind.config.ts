import baseConfig from "@repo/shared-ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "../../packages/shared-ui/src/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {},
} satisfies Config;
