import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  // ESLint + Prettier Configuration
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: [
      "plugin:prettier/recommended", // Use Prettier's recommended configuration
      "eslint:recommended", // Keep ESLint's basic recommended rules
    ],
    plugins: ["prettier"], // Enable Prettier plugin
    rules: {
      "prettier/prettier": "error", // Show Prettier issues as errors
      "no-console": "warn", // Example: ESLint rule
      "no-unused-vars": "warn", // Example: ESLint rule
    },
  },
]);
