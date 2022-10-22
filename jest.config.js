/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        diagnostics: true,
        // ts-jest configuration goes here
        tsconfig: 'tsconfig.json',
      },
    ]
  },
  moduleFileExtensions: ['ts', 'js'],
};
