const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function () {

  return {
    mode: 'production',
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
        'NODE_ENV': 'production',
        'API_URL': 'https://api.gamerscout.com/api/1',
        'DEBUG': false,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration());