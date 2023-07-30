/** @type {import('jest').Config} */

const config = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = config
