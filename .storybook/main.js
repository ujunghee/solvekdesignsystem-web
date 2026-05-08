/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../**/*.stories.js",
    "../**/*.mdx",
    "!../node_modules/**",
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/html-vite"
};
export default config;