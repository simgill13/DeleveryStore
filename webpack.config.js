
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');




let config = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'App.bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(['dist']),
  ]
};


module.exports = (env, argv) => {
    console.log('env====>',env)
    console.log('argv====>',argv.mode)
      if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.mode = argv.mode
      }
    
      if (argv.mode === 'production') {
        config.mode = argv.mode
        return config
      }

      console.log('hit')
    
      return config;
 };