const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: "./src/main.js",

    output: {
        filename: "build/build.js",
    },

  module: {
      loaders: [
          {test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/'}
      ]
  },

  resolve: {
      extensions: ['.js', '.jsx']
  },

  plugins: [  ]

}
