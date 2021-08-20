/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
    },
  },
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^lib/(.*)$': '<rootDir>/common/$1',
  },
  testEnvironment: 'jsdom',
};