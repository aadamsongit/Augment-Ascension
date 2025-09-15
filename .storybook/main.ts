import type { StorybookConfig } from "@storybook/nextjs-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],

  // <-- add this
  async viteFinal(config) {
    config.plugins = [...(config.plugins || []), tsconfigPaths()];
    return config;
  },
};

// module.exports = {
//   addons: ['storybook-dark-mode'],
// };

export default config;