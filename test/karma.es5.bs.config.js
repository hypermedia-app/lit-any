const createBaseConfig = require('@open-wc/testing-karma-bs/create-karma-es5-bs.config');

module.exports = (config) => {
    const baseConfig = createBaseConfig(config);

    config.set({
        ...baseConfig,

        files: [
            // if --grep flag is set, run those tests instead
            config.grep ? config.grep : '**/*.test.js',
        ],

        webpack: {
            ...baseConfig.webpack,
        },

        browserStack: {
            ...baseConfig.browserStack,
            project: 'lit-any',
        },
    });


    const babelLoader = config.webpack.module.rules.find(rule => rule.loader === 'babel-loader');
    babelLoader.options.plugins = babelLoader.options.plugins || [];
    babelLoader.options.plugins.push('@babel/plugin-syntax-dynamic-import');
    babelLoader.options.plugins.push([
        '@babel/plugin-transform-regenerator',
    ]);
};
