
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    //入口
    entry: {
        main: './main.js'
    },
    //出口
    output: {
        //输出资源路径，最好绝对路径
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader!autoprefixer-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.(jpg|ttf|svg|png)$/,
            loader: 'url-loader?limit=4096'
        }]
    },
    //html
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: { 
        alias: { 
        'vue$': 'vue/dist/vue.esm.js'
        }
    }

}
