module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  globals: {
    // 'ts-jest': {
    //   diagnostics: {
    //     warnOnly: true,
    //   },
    // },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
};
