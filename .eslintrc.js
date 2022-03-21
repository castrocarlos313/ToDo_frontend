module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": 0,
    indent: ["error", 2],
    "linebreak-style": 1,
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
  },
};
