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
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: path.join(__dirname, 'src'),
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        presets: ['es2017']
      }
    ]
  }
}
