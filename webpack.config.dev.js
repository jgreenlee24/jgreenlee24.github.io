const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  plugins: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
      }),
      new CopyWebpackPlugin([
         { from: 'public' }
      ])
  ],
  module: {
      rules: [
          {
              test: /\.js?$/,
              loaders: [ 'babel-loader' ],
              exclude: /node_modules/,
              include: path.join(__dirname, 'src')
          },
          { 
              test: /\.(html)$/,
              loader: "file?name=[path][name].[ext]&context=./public"
          },
          {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
              ],
          },
      ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};