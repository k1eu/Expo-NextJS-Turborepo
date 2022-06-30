const createExpoWebpackConfigAsync = require("@expo/webpack-config");

const rootPackage = require("./package.json");

const dependencies = {
  ...rootPackage.dependencies,
  ...rootPackage.devDependencies,
};

const usedDeps = Object.keys(dependencies).filter(
  (dep) => dependencies[dep] === "*"
);

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: usedDeps,
      },
    },
    argv
  );
  return config;
};
