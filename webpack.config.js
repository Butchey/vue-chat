const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
let nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [
  // Client Configuration
  {
    // Insertpoint is 'src/client/index.js', that's where the webpack magic begins
    context: path.join(__dirname, 'src'),
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
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2016', 'es2017'],
              plugins: ['transform-es2015-template-literals']
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
    context: path.join(__dirname, 'src'),
    entry: path.join(__dirname, 'src', 'server.js'),
    // tell webpack to not touch any built-in modules like 'fs' or 'path'
    target: 'node',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js'
    },
    externals: nodeModules,
    module: {
      // Compilation settings
      rules: [
        {
          test: /\.js$/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2016', 'es2017'],
              plugins: ['transform-es2015-template-literals']
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
  }
];
