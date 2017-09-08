const path = require('path');
const glob_entries = require('webpack-glob-entries');

module.exports = {
    entry: glob_entries('./test/*.js'),
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js"],
        mainFields: ['jsnext:main', 'browser', 'main']
    },
    output: {
        path: path.resolve(__dirname, 'test/transpiled'),
        filename: '[name].es5.js',
        libraryTarget: 'umd'
    },
    devtool: 'inline'
};
