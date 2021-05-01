module.exports = {
  parser: "@typescript-eslint/parser", // it allows ESLint to understand
  //TypeScript syntax; it converts TypeScript into an ESTree-compatible form so it
  //can be used in ESLint
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: "tsconfig.json", // specifies the tsconfig file this typescript parser should use, resolved relative to current workDir
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/explicit-function-return-type": "off",
    'import/prefer-default-export': 'off',
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 80,
        //below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: ["/*.*", "node_modules"],
  // if you use this, then it tells eslint + tsconfig to ingore all files in root directory
  // this is useful, for keeping eslint from throwing errors on this file
};
