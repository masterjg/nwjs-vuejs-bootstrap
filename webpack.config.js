const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const NwjsWebpackPlugin = require('nwjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// @ts-ignore
process.traceDeprecation = true;

const mode = process.env.NODE_ENV || 'development';
const isInDevMode = mode === 'development';

module.exports = {
  stats: 'minimal',
  externals: {
    chrome: 'chrome',
    nw: 'nw',
  },
  devtool: 'source-map',
  mode,
  target: 'node-webkit',
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dist.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: (() => {
    const plugins = [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
        exclude: ['.gitkeep'],
        verbose: false,
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin([
        path.resolve(__dirname, 'src/icon.png'),
      ]),
    ];
    if (isInDevMode) {
      plugins.push(
        new NwjsWebpackPlugin({
          command: 'run . -- --load-extension=./node_modules/nw-vue-devtools/extension',
          commandDir: null,
        }),
      );
    }
    return plugins;
  })(),
  watch: isInDevMode,
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
    },
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [
      '.js',
      '.vue',
    ],
  },
};
