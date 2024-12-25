import { lingui } from "@lingui/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    babel({
      filter: /\.tsx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          "babel-plugin-react-compiler",
          "@lingui/babel-plugin-lingui-macro",
        ],
      },
    }),
    lingui({
      configPath: "../../lingui.config.ts",
    }),
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
