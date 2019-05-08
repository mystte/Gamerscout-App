var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const devConfiguration = function () {

  return {
    mode: 'development',
    plugins: [
      new webpack.EnvironmentPlugin({
        'NODE_ENV': 'development',
        'API_URL': 'https://api.local.gamerscout.dev:8080/api/1',
        'DEBUG': true,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, devConfiguration());