module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect', //
    },
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
