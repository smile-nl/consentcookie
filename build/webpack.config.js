module.exports = {
    entry: "./source/js/icookie.js",
    output: {
        path: __dirname,
        filename: "./build/icookie.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};