const { merge } = require('webpack-merge');
const loadSharedConfig = require('./configs/shared');

const loadModeConfig = env => require(`./configs/${env.mode}`)(env);

module.exports = env => merge(loadSharedConfig(env), loadModeConfig(env));

module.rules = {
  test: /\.hbs$/,
  use: 'handlebars-loader',
  exclude: /node_modules/,
};
