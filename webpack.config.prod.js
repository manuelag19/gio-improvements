const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['semantic-ui-react'],
    app: path.join(__dirname, '/src/index.js'),
  },
  output: {
    filename: 'static/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              // so we can use import Styles from './styles.css' syntax or destructuring
              modules: true,
              importLoaders: 1,
              // so we can write css rules like .home-button {...} and usit in our react files like
              // import { homeButton } from './styles.css'
              localsConvention: 'camelCase',
              sourceMap: true
            }
          },
          {
            // configuration found in postcss.config.js
            loader: 'postcss-loader',
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
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css'
    })
  ]
};
