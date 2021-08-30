const { propsTypeToTS } = require('../lib');

propsTypeToTS({
  libName: 'test',
  path: 'cli-demo/testTypes.js',
  destinationPath: 'cli-demo/index.d.ts',
});
