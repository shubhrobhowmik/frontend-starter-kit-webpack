const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const IS_DEV = process.env.NODE_ENV !== 'production';

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

const base = {
  entry: {
    main: path.join(SRC_DIR, 'index.js'),
  },
  output: {
    filename: IS_DEV ? '[name].bundle.js' : '[name].[contenthash].bundle.js',
    path: BUILD_DIR,
    publicPath: '',
  },
  // devtool: IS_DEV ? 'eval' : 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: './assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: './assets/fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(SRC_DIR, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? 'style.css' : 'style.[contenthash].css',
    }),
  ],
};

const dev = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    overlay: true,
    port: 3000,
    compress: true,
    // hot: true
    // contentBase: BUILD_DIR
  },
};

const prod = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            // drop_console: true
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new ImageminPlugin()],
};

module.exports = IS_DEV ? merge(base, dev) : merge(base, prod);
