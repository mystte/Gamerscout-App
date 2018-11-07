const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const commonConfig = {
  entry: [
    'babel-register',
    'babel-polyfill',
    './build/index.js',
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src'),
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.less', '.svg', '.png', '.jpg', '.jpeg', 'gif'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            'react',
            ['env', {
              targets: {
                browsers: ['> 5%', 'last 2 versions', 'IE 11', 'safari >= 9'],
                uglify: true,
              },
              modules: false,
              useBuiltIns: true,
            }],
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, minimize: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                browsers: ['last 2 versions', 'iOS >= 10', 'ios_saf >= 10', 'last 4 Safari version', 'Android >= 4.4', 'ChromeAndroid >= 35'],
              })],
            },
          },
          {
            loader: 'less-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: { minimize: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                browsers: ['last 2 versions', 'iOS >= 10', 'ios_saf >= 10', 'last 4 Safari version', 'Android >= 4.4', 'ChromeAndroid >= 35'],
              })],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: { name: '[name]_[hash]', prefixize: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { hash: 'sha512', digest: 'hex', name: '[hash].[ext]' },
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true, gifsicle: { interlaced: true }, optipng: { optimizationLevel: 7 } },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: { hash: 'sha512', digest: 'hex', name: '[hash].[ext]' },
      },
    ],
  },
  plugins: [
    // Dont build if errors are found
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  target: 'web',
};

if (TARGET === 'watch') {
  module.exports = merge.smart(commonConfig, {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            cache: true,
          },
        },
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
        },
      ],
    },

    plugins: [
      // Define build environment
      new webpack.DefinePlugin({
        __DEV__: true,
        __VERSION__: JSON.stringify('dev'),
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
      }),

      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin(),

      new webpack.HotModuleReplacementPlugin(),
    ],

    devtool: 'cheap-module-eval-source-map',

    devServer: {
      hot: true,
      contentBase: path.resolve(__dirname, 'build/'),
      compress: true,
      quiet: false,
      noInfo: false,
      lazy: false,
      inline: true,
      progress: true,
      historyApiFallback: true,
      publicPath: '/dist/',
      stats: { colors: true },
      host: 'localhost',
      disableHostCheck: true,
      port: 3334,
    },
  });
} else if (TARGET === 'build') {
  module.exports = merge(commonConfig, {
    plugins: [
      // Define build environment
      new webpack.DefinePlugin({
        __DEV__: false,
        __VERSION__: JSON.stringify(process.env.VERSION || 'prod'),
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),

      // new webpack.optimize.UglifyJsPlugin({
      new UglifyJsPlugin({
        sourceMap: true,
        parallel: true,
        warningsFilter: (src) => (src.indexOf('/node_modules/') === -1),
      }),
    ],

    devtool: 'source-map',
  });
} else {
  module.exports = commonConfig;
}
