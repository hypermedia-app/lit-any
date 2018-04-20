const path = require('path');
const glob_entries = require('webpack-glob-entries');

const entries = Object.assign({},
    glob_entries('./test/elements/*.js'),
    glob_entries('./test/templates/*.js'));

const createConfig = (glob, targetPath) => ({
    entry: glob_entries(glob),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false
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
        path: path.resolve(__dirname, `test/transpiled/${targetPath}`),
        filename: '[name].es5.js',
        libraryTarget: 'umd'
    },
    devtool: 'source-map'
});

module.exports = [
    createConfig('./test/elements/*.js', 'elements'),
    createConfig('./test/templates/*.js', 'templates'),
    createConfig('./test/render/*.js', 'render'),
];
