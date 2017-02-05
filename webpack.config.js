const webpack = require('webpack');
const path = require('path');

module.exports = [
  // Client Configuration
  {
    // Insertpoint is 'src/client/index.js', that's where the webpack magic begins
    entry: path.join(__dirname, 'src', 'client', 'index.js'),
    // The compiled file goes to 'dist/app/static/bundle.js'
    output: {
      path: path.join(__dirname, 'dist', 'app', 'static'),
      filename: 'bundle.js'
    },
    module: {
      // Compilation settings
      rules: [
        {
          // Check if file ends in .js, then execute transforms
          test: path.join(__dirname, 'src', 'client'),
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                'es2017'
              ]
            }
          }]
        },
        {
          // Before anything gets bundled, run eslint on all files in 'src'
          test: path.join(__dirname, 'src'),
          loader: 'eslint-loader',
          enforce: 'pre'
        }
      ]
    }
  },
  // Server Configuration
  {
    entry: path.join(__dirname, 'src', 'server.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js'
    },
    // tell webpack to not touch any built-in modules like 'fs' or 'path'
    target: 'node',

  }
];
