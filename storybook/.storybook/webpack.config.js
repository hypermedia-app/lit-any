module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: ['@babel/plugin-syntax-dynamic-import']
                    }
                },
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
