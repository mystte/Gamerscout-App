const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const stagingConfiguration = function () {

  return {
    mode: 'staging',
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new webpack.EnvironmentPlugin({
        'NODE_ENV': 'staging',
        'API_URL': 'https://api.dev.gamerscout.com',
        'API_VERSION': 1,
        'DEBUG': true,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, stagingConfiguration());