const path = require('path');
const glob_entries = require('webpack-glob-entries');

const createConfig = (glob, targetPath) => ({
    entry: glob_entries(glob),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        plugins: [
                            'babel-plugin-syntax-dynamic-import'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        mainFields: ['jsnext:main', 'browser', 'main']
    },
    output: {
        path: path.resolve(__dirname, `test/${targetPath}`),
        filename: '[name].es5.js',
        libraryTarget: 'umd'
    },
    devtool: 'source-map'
});

module.exports = [
    createConfig('./test/elements/*.js', 'elements'),
    createConfig('./test/templates/*.js', 'templates'),
    createConfig('./test/components/*.js', 'components'),
    createConfig('./test/render/*.js', 'render'),
];
