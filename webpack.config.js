require('webpack');
var glob = require('glob');

module.exports = {
  context: __dirname,
  entry: {
      app: glob.sync(__dirname + '/js/**/*.js')
  },
  output: {
      path: __dirname + '/build',
      filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      use: 'html-loader'
    }]
  }
};