const localConfig = require('./karma.conf');
const createBaseConfig = require('@open-wc/testing-karma-bs/create-karma-es5-bs.config');

module.exports = (config) => {
    const baseConfig = localConfig(config);
    const bsConfig = createBaseConfig(baseConfig);

    config.set({
        ...bsConfig,

        browserStack: {
            ...bsConfig.browserStack,
            project: 'lit-any',
        },
    });
};
