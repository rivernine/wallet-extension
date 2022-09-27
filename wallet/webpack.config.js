const webpack = require('webpack');

module.exports = {
    plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    resolve: {
        // modules: [...],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify ,
            "buffer": require.resolve("buffer")
        }
    },
    // entry: [...],
    // output: { ...},
    // module: {
    //     rules: [...]
    // },
    // plugins: [...],
    // optimization: {
    //     minimizer: [...],
    // },
    // node: {
    //   fs: 'empty',
    //   net: 'empty',
    //   tls: 'empty'
    // },
}