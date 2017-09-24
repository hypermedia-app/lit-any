// rollup.config.js
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

const pkg = require('./package');

const nodePlugin = nodeResolve({
    module: true,
    jsnext: true,
    browser: true,
    extensions: ['.js', '.json'],
    preferBuiltins: false,
});

export default {
    input: pkg.config.src,
    name: pkg.config.moduleName,
    sourcemap: true,
    output: {
        file: pkg.main,
        format: 'es',
    },
    plugins: [
        babel(),
        nodePlugin,
    ],
    external: [
        'lit-html',
        'lit-html/lib/lit-extended',
        '@polymer/polymer/lib/mixins/property-accessors'
    ],
};
