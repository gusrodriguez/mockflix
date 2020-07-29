const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: `${APP_DIR}/src/index.jsx`,
  mode: 'development',

  // Where to output the js bundle
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
    publicPath: '/',
  },
  module: {
    rules: [
      // ES6 Loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
              mimetype: 'application/font-ttf',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // Copy images to the build directori.
  plugins: [
    new CopyPlugin([{
     from: `${APP_DIR}/index.html`, to: BUILD_DIR,
     from: `${APP_DIR}/_redirects`, to: BUILD_DIR,
    }]),
  ],
  watch: false,
  devtool: 'source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx','.tsx', '.ts'],
  },
};

module.exports = config;
