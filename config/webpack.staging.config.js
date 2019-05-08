var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const stagingConfiguration = function () {

  return {
    mode: 'staging',
    plugins: [
      new webpack.EnvironmentPlugin({
        'NODE_ENV': 'staging',
        'API_URL': 'https://api.dev.gamerscout.com/api/1',
        'DEBUG': true,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, stagingConfiguration());