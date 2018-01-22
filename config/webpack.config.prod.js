const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
  filename: "/css/[name].css",
  disable: process.env.NODE_ENV === "dev"
});

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: { 
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "../public/assets"),
    filename: "bundle.min.js"
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015', 'react']
            }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: extractSass.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: "css-loader" // translates CSS into CommonJS
              }, 
              {
                loader: "sass-loader" // compiles Sass to CSS
              }
            ]
          })
        } 
    ]

  },

  devtool: "source-map", 
  target: "web",
  stats: "errors-only",
  
  plugins: [
    extractSass,
    
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}