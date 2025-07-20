module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.test.js' }],
  },
  transformIgnorePatterns: ['/node_modules/(?!react-calendar)/'], // fix ESM import errors
  testPathIgnorePatterns: ['babel.config.test.js'],
  moduleNameMapper: {
    '^next/font/google$': '<rootDir>/__mocks__/next-font.js', // mock fonts
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // setup jest-dom matchers
  testEnvironment: 'jsdom',
};
