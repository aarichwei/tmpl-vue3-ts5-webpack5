const { Configuration } = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

/**
 * @type {Configuration}
 */
const config = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html',
      title: 'tmpl-vue3-ts5-webpack5',
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
