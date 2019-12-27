const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['semantic-ui-react'],
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '/public'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      // first rule for our jsx and js files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // moved babel configuration to its own file
        use: ['babel-loader'],
      },
      // secon rule: test for files with css extension
      {
        test: [/\.css$/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // so we can use import Styles from './styles.css' syntax or destructuring
              modules: true,
              // so we can write css rules like .home-button {...} and usit in our react files like
              // import { homeButton } from './styles.css'
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      },
    ],
  },
  // code splitting
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    // prints more readable module names in the browser terminal on HMR updates
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    // render index.html
    historyApiFallback: true,
    // open the browser automatically and launch app to localhost:3000
    open: true,
    // enable HMR on the server
    hot: true,
  }
};
