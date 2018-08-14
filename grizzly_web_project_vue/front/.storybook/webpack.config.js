const path = require('path');
const vueLoaderConfig = require('../build/vue-loader.conf');
const devWebpackConfig = require('../build/webpack.dev.conf');
const utils = require('../build/utils');
const config = require('../config');

// const defaultStorybookVueWebpackConfig = require('../node_modules/@storybook/vue/dist/server/config/webpack.config.js').default('./webpack.config');

module.exports = (baseConfig, env, defaultConfig) => {
  // console.log('baseConfig', baseConfig);
  // console.log('env', env);
  // console.log('default', defaultConfig);

  // alias @
  defaultConfig.resolve.alias['@'] = path.resolve(__dirname, '../src');

  // const vueRule = defaultConfig.module.rules.find(
  //   item => item.test.toString().includes('vue'),
  // );
  // vueRule.options = vueLoaderConfig;

  // scss from wweb
  // defaultConfig.module.rules.push({
  //   test: /.s[ac]ss$/,
  //   loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
  //   // include: path.resolve(__dirname, '../'),
  // });

  // scss from this project
  Array.prototype.push.apply(defaultConfig.module.rules, utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }));
  // defaultConfig.module.rules.push(utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true }));

  // font not found
  // defaultConfig.module.rules.push({
  //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  //   loader: 'url-loader',
  //   options: {
  //     limit: 10000,
  //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
  //   }
  // });
  console.log('webpack config', defaultConfig, JSON.stringify(defaultConfig.module.rules, null, 2));
  return defaultConfig;
};
