const createBaseConfig = require('@open-wc/testing-karma/create-karma-es5.config');

module.exports = (config) => {
    const baseConfig = createBaseConfig(config);

    config.set({
        ...baseConfig,

        files: [
            ...baseConfig.files,
            // if --grep flag is set, run those tests instead
            config.grep ? config.grep : '**/*.test.js',
        ],

        webpack: {
            ...baseConfig.webpack,

            optimization: {
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            chunks: 'all',
                        },
                    },
                },
            },
        },
    });

    const babelLoader = config.webpack.module.rules.find(rule => rule.loader === 'babel-loader');
    babelLoader.options.plugins = babelLoader.options.plugins || [];
    babelLoader.options.plugins.push('@babel/plugin-syntax-dynamic-import');

    const istanbul = config.webpack.module.rules.find(rule => rule.loader === 'istanbul-instrumenter-loader');
    istanbul.include = require('path').resolve('../');
    istanbul.exclude = /node_modules|bower_components|test/;

    delete config.coverageIstanbulReporter.thresholds;
};
