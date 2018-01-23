'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //指定入口
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        //css
        //less
        //jpg
        //js
        //.vue
        loaders: [{
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }, {
                test: /\.(jpg|ttf|svg|png)$/,
                loader: 'url-loader?limit=4096'
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                //排除路径
                exclude: /node_modules/,
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            },
            //处理.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader' //vue-loader 依赖于vue-template-compiler
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html', //未来移动到dist目录下能够有Index.html文件
            //自动加上引入output中的filename
        })
    ]
}
