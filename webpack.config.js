const path = require('path');
const Dotenv = require('dotenv-webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

const SRC_DIR = path.join(__dirname, '/Client/src');
const PUBLIC_DIR = path.join(__dirname, '/Client/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  watch: true,
};
