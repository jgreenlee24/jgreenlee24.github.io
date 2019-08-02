const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/static/'
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loaders: [ 'react-hot', 'babel' ],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
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
    }
};