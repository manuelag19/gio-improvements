const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const webpackMerge = require('webpack-merge');

// Include webpack plugions through addons that do not need to run
// every time we are developing
const addons = (/* string | string[] */ addonsArg) => {
  // flatten array of addons
  let addons = [...[addonsArg]]
    .filter(Boolean); // if addons is undefined, filter it out

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`)
  );
};

// 'env' will conatin the environment variable from 'scripts' in package.json
module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  // Select which Webpack config to use: dev | prod
  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  // use webpack merge to combine with the shared config and addons
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );
  // return final config for Webpack
  return mergedConfig
}