import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint, { parser } from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier";

import path from "node:path";
import { fileURLToPath } from "node:url";

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url));

console.log(tsconfigRootDir);

export default defineConfig([
  globalIgnores([
    "node_modules",
    "dist",
    "build",
    "coverage",
    "public",
    "scripts",
    "test",
    "tests",
    "tmp",
    "vendor",
  ]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      perfectionist,
      react,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser,
    },
    rules: {
      "block-scoped-var": "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-return-assign": "error",
      "no-useless-concat": "error",
      "no-useless-return": "warn",
      "prefer-const": "warn",
      "no-unneeded-ternary": "error",
      "prefer-object-spread": "warn",
      "no-undef-init": "warn",
      "@typescript-eslint/no-require-imports": "error",
      "max-classes-per-file": ["error", 1],
      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],
      "max-classes-per-file": ["error", 1],
      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          fallbackSort: { type: "unsorted" },
          ignoreCase: true,
          specialCharacters: "keep",
          internalPattern: ["^~/.+"],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 1,
          groups: [
            "type",
            "type-internal",
            "next",
            "react",
            { group: ["builtin", "external"], type: "alphabetical" },
            "internal",
            "absolute-internal-module",
            { group: ["parent", "sibling", "index"], type: "alphabetical" },
            "style",
            "unknown",
          ],
          customGroups: [
            {
              groupName: "react",
              elementNamePattern: ["^react$", "^react-.+"],
            },
            {
              groupName: "next",
              elementNamePattern: ["^next$", "^next/.+"],
            },
            {
              groupName: "absolute-internal-module",
              elementNamePattern: ["^@/.+"],
            },
          ],
          environment: "node",
        },
      ],
      "react-hooks/set-state-in-effect": "warn",
    },
  },
]);
