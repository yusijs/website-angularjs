var path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const filesToCopy = new CopyWebpackPlugin([
    {
        from: 'index.html'
    },
    {
        from: './node_modules/angular-material/angular-material.min.css'
    }
])

module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css/,
                loader: 'css-loader'
            }
        ],
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        filesToCopy,
        new ngAnnotatePlugin({
            add: true
        })
    ],
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "source-map"
}
