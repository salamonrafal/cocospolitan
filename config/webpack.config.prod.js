const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const WebpackCleanupPlugin = require ('webpack-cleanup-plugin');

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
          test: /\.(jpe?g|png|gif|svg)$/i, 
          exclude: /node_modules/,
          loader: "file-loader?name=images/[hash].[ext]&publicPath=assets/"
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

  performance: {
    hints: "warning"
  },
  
  plugins: [

    new WebpackCleanupPlugin({
      quiet: true,
      exclude: ['css/*']
    }),

    extractSass,
    
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.DefinePlugin({
      '__ENV__': JSON.stringify('production')
    })    
  ]
}