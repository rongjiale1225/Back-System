const path = require('path');
//打包静态文件
const CopyWebpackPlugin = require('copy-webpack-plugin');
//处理HTML文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode: 'none',
    entry: {
        index: './src/javascripts/index',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dev')
    },
    devServer: {
        port: 9000
    },
    plugins: [
        new CopyWebpackPlugin([ // 复制静态资源
            { from: 'static', to: 'static' }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',      // 被打包的HTML文件路径
            filename: 'index.html',   //打包后的HTML文件的名字
            chunks: ['index']   //打包后HTML文件所引入的js文件
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]   //如果图片大于限制的字节数，将会输出图片地址，一般不使用模块引进的方式输出，
                    //将其作为静态资源，需要的时候到对应的目录引入即可
                    //只有图片小于限制的字节数时，使用url-loader来当成模块引入的js中输出为base64格式的字符串
            },
            {//编译html文件
                test: /.html$/,
                use: ['string-loader']
            },
            {//编译scss、css文件
                test: /.(css|scss)$/,
                use: [
                    'style-loader',// 把它拿出去
                    'css-loader', // 找到引入的这些css代码
                    'sass-loader' // 将引入的scss代码编译成css代码
                ]
            },
            {//babel配置将ES6编译成ES5
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader?optional=runtime',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
            }
        ]
    },
    resolve:{//配置别名，方便引入文件时路径的填写
        alias:{
            "@": path.resolve(__dirname,'../src'),
            "@controllers": path.resolve(__dirname,'../src/javascripts/controllers'),
            "@models": path.resolve(__dirname,'../src/javascripts/models'),
            "@views": path.resolve(__dirname,'../src/javascripts/views'),
            "@style": path.resolve(__dirname,'../src/stylesheets')
        }
    }
}