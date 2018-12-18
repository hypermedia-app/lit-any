const createBaseConfig = require('@open-wc/testing-karma/create-karma-config');

module.exports = (config) => {
    const baseConfig = createBaseConfig(config);

    config.set({
        ...baseConfig,

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

        files: [
            // if --grep flag is set, run those tests instead
            config.grep ? config.grep : '**/*.test.js',
        ],
    });

    const istanbul = config.webpack.module.rules.find(rule => rule.loader === 'istanbul-instrumenter-loader');
    istanbul.include = require('path').resolve('../');
};
