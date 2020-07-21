module.exports = {
    setupFilesAfterEnv: ["./src/setupTests.js"],
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/src/__mocks__/svgrMock.js',
    },
  };