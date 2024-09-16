module.exports = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/e2e/**/*.test.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
