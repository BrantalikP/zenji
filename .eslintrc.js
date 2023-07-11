module.exports = {
  extends: [
    'universe',
    'universe/shared/typescript-analysis',
    'plugin:storybook/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['storybook', '@tanstack/query'],
  rules: {
    semi: 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: ['!.storybook', 'src/features/api/wanikani/**'],
}
