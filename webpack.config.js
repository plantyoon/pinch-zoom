const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
        // loader: [
        //   'style-loader', // css를 스타일태그에 적용시킨다.
        //   'css-loader', // css파일을 읽는다.
        // ],
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new ExtractTextPlugin('style.css'),
  ],
  resolve: {
    extensions: ['.js'],
  }
};