const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './public',
        hot: true,
        historyApiFallback: true,
        port: 3000,
    },
    plugins: [
        new webpack.DefinePlugin({
            __WEBPACK_ENVIRONMENT__: JSON.stringify('development'),
        }),
    ],
});
