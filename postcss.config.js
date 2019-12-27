const postcssPresetEnv = require('postcss-preset-env');
//see webpack.js.org/loaders/postcss-loader/
module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
    }),
    require('cssnano')
  ]
};
