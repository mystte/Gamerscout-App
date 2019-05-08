var webpack = require('webpack');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function () {

  return {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin({
        'NODE_ENV': 'production',
        'API_URL': 'https://api.gamerscout.com/api/1',
        'DEBUG': false,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration());