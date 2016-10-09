var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
// 定义文件夹路径
var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'app')
var BUILD_PATH = path.resolve(ROOT_PATH, 'docs')

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url?limit=10000'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(ROOT_PATH, 'index.html')
        })
    ]
}