### npx命令

> https://blog.csdn.net/LeonNo11/article/details/137826154

### 命令行命令

- npx webpack --mode=development
- npx webpack --mode=production
- npx webpack ./src/main.js --mode=development
- --config "./webpack.prod.js" 配置文件

### 依赖

- npm install --save-dev style-loader css-loader
- npm install --save-dev html-webpack-plugin



### webpack  指南 

[指南](https://www.webpackjs.com/guides/getting-started/#using-a-configuration)


### webpack.config文件映射编码

- 管理资源 -> glzy


### devtool

 [devtool](https://www.webpackjs.com/configuration/devtool/)

### optimization

[runtimeChunk:"single"// 多入口文件依赖同一个模块](https://bundlers.tooling.report/code-splitting/multi-entry/)