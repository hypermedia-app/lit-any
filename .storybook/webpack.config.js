module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                    /@webcomponents/,
                    /react-split-pane/
                ]
            },
            {
                test: /\.stories\.jsx?$/,
                loaders: [require.resolve('@storybook/addon-storysource/loader')],
                enforce: 'pre',
            },
        ],
    }
};
