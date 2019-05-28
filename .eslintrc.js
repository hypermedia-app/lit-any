const path = require('path')

module.exports = {
  "extends": [
    "@open-wc/eslint-config",
    "plugin:@typescript-eslint/recommended",
    "standard"
  ],
  "root": true,
  "rules": {
    "indent": "off",
    "import/no-unresolved": "warn",
    "space-before-function-paren": [
      "error",
      {
        "named": "never"
      }
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ]
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017
  },
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "lit"
  ],
  "env": {
    "browser": true
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: [
          path.resolve(__dirname, 'components'),
          path.resolve(__dirname, 'lit-any'),
          path.resolve(__dirname, 'storybook'),
          path.resolve(__dirname, 'test'),
        ]
      }
    }
  }
}
