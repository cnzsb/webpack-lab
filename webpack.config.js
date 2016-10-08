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
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ]
}