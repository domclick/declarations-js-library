const merge = require('webpack-merge');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const common = require('./webpack.config.cjs');

module.exports = merge(common, {
  mode: 'production',
  output: {
    library: {
      type: 'commonjs',
    },
  },
  devtool: false,
  externals: [nodeExternals()],
  plugins: [
    new DuplicatePackageCheckerPlugin(),
  ],
});
