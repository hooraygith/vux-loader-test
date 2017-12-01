const path = require('path')
const webpack = require('webpack')
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = {
    entry: [path.resolve(__dirname, './src/index.js')],
    output: {
        // name hash chunkhash
        filename: 'js/[name]-[chunkhash:8].js',
        chunkFilename: 'js/[name]-[chunkhash:8].js',
        publicPath: '/',
        path: process.cwd() + '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
