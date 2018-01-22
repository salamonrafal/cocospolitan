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
    filename: "bundle.js",
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
          loader: "file-loader?name=images/[name].[ext]&publicPath=assets/"
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
  stats: "verbose",

  node: {
    fs: "empty"
  },

  performance: {
    hints: "warning"
  },

  devServer: {
    contentBase: path.join(__dirname, "../public/"),
    index: 'index_dev.html',
    historyApiFallback: {
      index: 'index_dev.html',
    },
    open: true,
    inline: true,
    port: 8080
  },

  plugins: [
    extractSass
  ]
}