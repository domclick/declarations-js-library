const path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'DeclarationJSLibrary',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
