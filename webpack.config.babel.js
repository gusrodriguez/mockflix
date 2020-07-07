const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: `${APP_DIR}/src/index.js`,
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
        test: /\.m?js$/,
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
    ],
  },
  // Be able to concat all the css files in one.
  plugins: [
  ],
  watch: true,
  devtool: 'source-map',
  watchOptions: {
    poll: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = config;
