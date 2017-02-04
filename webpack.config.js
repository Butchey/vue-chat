const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Insertpoint is 'src/index.js', that's where the webpack magic begins
  entry: path.join(__dirname, 'src', 'index.js'),
  // The compiled file goes to 'dist/bundle.js'
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // Compilation settings
    loaders: [
      {
        // Check if file end in .js, then execute transforms
        test: path.join(__dirname, 'src'),
        // Babel transform
        loader: 'babel-loader',
        presets: ['es2017']
      }
    ]
  }
}
