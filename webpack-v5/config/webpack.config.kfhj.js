const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// npx webpack --config ./config/webpack.config.glzy.js --mode=development
module.exports = {

    entry: {
        /**
         * //这里的相对路径怎么理解 ，
         * 和 package.json里面配置有关 还是因为是在webpack-v5文件下执行命令的，所以是 ./ ,
         * 而不是 ../,不是相对于当前文件夹 config
         */
        index: "./src/kfhj.js",
        print: "./src/print.js",
        comp1:"./src/js/component-1.js",
        comp2:"./src/js/component-2.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
        clean: true // 在生成文件之前清空 output 目录

    },
    devServer: {
        static: "./dist"

    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // 没有字体处理配置。也能使用字体文件
            //加上
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        runtimeChunk:"single"// 多入口文件依赖同一个模块

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html',
            filename: "index.html",
            minify: true,
        })
    ],
    mode: "development",
    // devtool:"inline-source-map"
    // devtool:"eval-source-map"
    // devtool:"eval"
    devtool: 'inline-source-map'

}