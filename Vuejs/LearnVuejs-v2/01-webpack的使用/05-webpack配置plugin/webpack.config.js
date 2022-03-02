const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/' // 在url前面添加'dist/'
  },
  module: {
    rules: [ 
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时, 会将图片编译成base64字符串形式
              // 当加载的图片大于limit时, 需要使用file-loader模块进行加载
              limit: 60000,
              // img/表示将创建一个叫img的文件夹
              // []表示括号内的元素将视为一个变量,
              // name, hash, ext都属于变量; ext表示扩展名
              // 注意: name: 是在options对象内的
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.css', '.vue' ],
    // alias: 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归banri所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }
}