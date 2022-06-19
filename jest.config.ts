export default {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
