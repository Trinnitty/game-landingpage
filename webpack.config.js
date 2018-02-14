const path = require('path');

module.exports = {
  entry: './src/js/init.js',
  output: {
    path: path.resolve(__dirname, 'dist')б
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};