module.exports = {
    entry: "./main.js",
    output: {
        path: "assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
