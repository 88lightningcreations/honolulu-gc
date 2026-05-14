import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  // Global ignores
  {
    ignores: ["node_modules/", ".next/", "next.config.js"],
  },

  // Base JS/TS configuration
  js.configs.recommended,
  ...ts.configs.recommended,

  // Configuration for React files
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Next.js doesn't require this
      "react/prop-types": "off", // Often not needed in TypeScript projects
    },
  },

  // Configuration for Next.js
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
];