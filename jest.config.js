module.exports = {
  roots: ["<rootDir>", "<rootDir>/src"],
  preset: "ts-jest",
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testMatch: [
      '<rootDir>/test/**/*.(js|jsx|ts|tsx)'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],    
};
