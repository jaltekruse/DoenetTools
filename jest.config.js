console.log(__dirname);
module.exports = {
  // Your normal jest config settings
  testPathIgnorePatterns: ["<rootDir>/cypress/", "<rootDir>/.cache/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      { configFile: path.resolve(__dirname, "babel.config.js") },
    ],
  },
  modulePaths: ["<rootDir>"],
};
