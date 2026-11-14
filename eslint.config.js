import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactThree from '@react-three/eslint-plugin'
import react from 'eslint-plugin-react'

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    plugins: {
      '@react-three': reactThree,
      react, 
    },

    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },

    rules: {
      '@react-three/no-clone-in-loop': 'error',
      '@react-three/no-new-in-loop': 'error',
      "react/jsx-no-target-blank": "error",
      "react/no-unknown-property": "error",

      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
]);
