
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testRegex: 'tests/.*\\.jest\\.(js|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
