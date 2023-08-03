module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // Add your ESLint rules here
    '@typescript-eslint/no-unused-vars': 'off', // Disable the unused vars rule
    'react/prop-types': 'off', // Disable prop-types requirement for React components (optional)
  },
}
