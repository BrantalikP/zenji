module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:storybook/recommended'],
  Plugin: ['storybook'],
  rules: {
    semi: 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: ['!.storybook'],
}
