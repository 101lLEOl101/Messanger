const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  externals: [nodeExternals({ additionalModuleDirs: ['../node_modules'] })],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { onlyCompileBundledFiles: true },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
