'use strict'

const path = require('path')
const webpack = require('webpack')
const vuxLoader = require('vux-loader')

let config = {
    entry: ['./src/index.js'],
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}

module.exports = vuxLoader.merge(config, {
    plugins: [
        'vux-ui',
        {
            name: 'less-theme',
            path: 'src/static/styles/vux-theme.less'
        }
    ]
})
