var path = require('path');

module.exports = {
  mode: 'development',
  // entry point files
  entry: {
    App: './src/js/app.js',
    Vendor: './src/js/vendor.js' 
  },
  // where to create bundled files
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'src/js-bundled')//absolute path
  },
  module: {
    rules:  [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};