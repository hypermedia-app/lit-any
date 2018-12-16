const browserstack = require('browserstack-local');
const { spawn } = require('child_process');

// Start Browserstack local tunnel
const local = new browserstack.Local();
local.start({
    key: 'yr1ityFZzsRWpb4uqtBy'
}, () => {
    // Then run "wct test --configFile browserstack.wct.conf.js"
    const child = spawn('polymer', [
        'test',
        '--config-file',
        'browserstack.wct.conf.js',
        '--npm'
    ], { stdio: 'inherit' });
    child.on('close', code => {
        local.stop(() => {
            process.exit(code);
        });
    });
});
