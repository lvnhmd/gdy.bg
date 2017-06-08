var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: './build/js/app-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            // If you're following the tutorial for the first time, 
            // you will be using Babel v6 and thus you need to add this extra configuration
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    },
    // This is to load polyfills (http://mts.io/2015/04/08/webpack-shims-polyfills/)
    plugins: [
        new webpack.ProvidePlugin({
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
            'es6-promise': 'es6-promise'
        }),
        new CopyWebpackPlugin(
            [{ from: 'assets', to: 'build' }]
        )
    ]
};
