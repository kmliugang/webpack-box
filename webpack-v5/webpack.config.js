const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // entry: "./src/index.js",
    entry: {
        index:"./src/index.js",
        print:"./src/print.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // filename: "main.js",
        filename: "[name].bundle.js",
        clean: true // 在生成文件之前清空 output 目录


    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)/i,
                type: 'asset/resource',
                generator: {
                    filename: "[name].[hash:8][ext]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            title:"my App"
        })

    ],

    mode: 'development'
}