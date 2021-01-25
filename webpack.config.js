let webpack = require('webpack');
let path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"

    entry: {
        app: './resources/js/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].js',
        publicPath: './public'
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};
