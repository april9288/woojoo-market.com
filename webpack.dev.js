const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './public',
        port: 3005,
        historyApiFallback: true
    }
});
