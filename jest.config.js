export default {
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env', '@babel/preset-react'] }],
    },
    testPathIgnorePatterns: [
      "/node_modules/",
      "^/imagenes/"
    ],
    moduleNameMapper: {
      "\\.(pdf)$": "<rootDir>/__mocks__/fileMock.js"
    },
    testEnvironment: "jsdom"
    };