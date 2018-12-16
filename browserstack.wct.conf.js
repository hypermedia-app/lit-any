module.exports = {
    // Directly set active browsers to use
    activeBrowsers: [
        {
            browser: 'Edge',
            os: 'Windows',
            os_version: '10',
        },
        {
            browser: 'Chrome',
            os: 'Windows',
            os_version: '8.1',
        },
        {
            browser: 'Firefox',
            os: 'Windows',
            os_version: '8.1',
        },
        {
            browser: 'safari',
            os: 'OS X',
            os_version: 'High Sierra',
        },
    ],
    browserOptions: {
        // Point all browsers to Browserstack's WD api
        url: 'https://hub-cloud.browserstack.com/wd/hub',
        name: 'WCT',
        build: process.env.CODEBUILD_BUILD_ID || new Date(),
        project: 'lit-any',
        // Browserstack auth
        'browserstack.user': 'tomaszpluskiewic1',
        'browserstack.key': 'yr1ityFZzsRWpb4uqtBy',
        // Use browserstack local tunnel that we started
        'browserstack.local': true,
    },
};
