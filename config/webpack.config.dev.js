const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "/css/[name].css",
  disable: process.env.NODE_ENV === "dev"
});


module.exports = {
  entry: "../src/index.js",
  output: {
    path: path.resolve(__dirname, "../public/assets"), // string
    filename: "bundle.js",
    publicPath: "../public/"
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['es2015']
            }
        },
        {
          test: /\.scss$/,
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

  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", 
  context: __dirname,
  target: "web",
  externals: ["react", /^@angular\//],
 
  stats: "errors-only",

  DevServer: {
    contentBase: path.join(__dirname, "../public"),
    compress: true,
    index: 'index.html',
    lazy: false,
    open: true,
    watchContentBase: true,
    port: 8080
  },

  plugins: [
    extractSass
  ],
}