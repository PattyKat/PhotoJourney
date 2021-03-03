var path = require('path');
const Dotenv = require('dotenv-webpack');

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
    new Dotenv()
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};