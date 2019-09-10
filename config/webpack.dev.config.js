var webpack = require('webpack');
var fs = require('fs');
var merge = require('webpack-merge');

var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const devConfiguration = function () {

  return {
    mode: 'development',
    devServer: {
      host: 'local.gamerscout.dev',
      https: {
        key: fs.readFileSync('./config/ssl/local/app/local.gamerscout.dev.key'),
        cert: fs.readFileSync('./config/ssl/local/app/local.gamerscout.dev.crt'),
      }
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        'NODE_ENV': 'development',
        'API_URL': 'https://api.local.gamerscout.dev:8080',
        'API_VERSION': 1,
        'DEBUG': true,
      }),
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, devConfiguration());