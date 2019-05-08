
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      terserOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        keep_classnames: true,
        keep_fnames: true,
      },
    })],
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
  ],
}