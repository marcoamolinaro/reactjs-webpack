'use strict'

const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
      },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
        }]
    }
}