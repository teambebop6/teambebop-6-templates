const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../server'),
  devtool: 'source-map',
  entry: [
    './index.js',
  ],
  node: {
    __dirname: false,
  },
  target: 'node',
  output: {
    path: path.join(__dirname, '../.build/bin'),
    filename: './server.js',
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'es2015', 'stage-1' ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              emitFile: false,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': 'production'
    //   }
    // }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new CopyWebpackPlugin([
      {
        from: '../server/views/index.ejs',
        to: '../views/index.ejs'
      },
      {
        from: '../pm2/pm2.dev.config.js',
        to: '../pm2.dev.config.js'
      },
      {
        from: '../pm2/pm2.www.config.js',
        to: '../pm2.www.config.js'
      },
    ]),
  ]
};
