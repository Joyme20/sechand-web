const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
	devtool:'eval-source-map',
	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
	output: {
	path: __dirname + "/build",//打包后的文件存放的地方
	filename: "bundle.js"//打包后输出文件的文件名
	},
	devServer:{
		contentBase:'./public',//本地服务器所加载的页面所在的目录
		historyApiFallback:true,//不跳转
		inline:true,//实时刷新
        hot:true,//热加载
	},
	module:{
		rules:[
			{
				test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
						}
				]
			},
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500000,
                            outputPath: 'images/'
                        }
                    }
                ]
            }
		]
	},
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/template.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
}

//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
