//commomjs
const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack") //webpack内置
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
module.exports = {
  mode: "development", //development 开发阶段， 生产阶段 production
  devtool: "source-map", //默认eval 会生成js文件映射可以定位源代码调试
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        // 1.loader的写法(语法糖)
        // loader:"css-loader"
        use: [
          // 2.完整写法
          // {loader:"css-loader"}
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader",
        ]
      },
      // 版本会有问题
      // {
      //   test: /\.(jpg|png|gif|svg)$/,
      //   use: [{
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "img",
      //       name: "[name]-[hash:6].[ext]",
      //       esModule: true
      //     }
      //   }],
      // },
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      // 版本会有问题
      // {
      //   test:/\.(eot|ttf|woff2?)$/,
      //   use:{
      //     loader:"file-loader",
      //     options:{
      //       name:"font/[name]_[hash:6].[ext]"
      //     }
      //   }
      // }
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          // options:{
          //   // plugins:[
          //   //   "@babel/plugin-transform-arrow-functions",
          //   //   "@babel/plugin-transform-block-scoping"
          //   // ]
          //   presets:[
          //     "@babel/preset-env"
          //   ]
          // }
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader" //使用 vue-comilper-sfc的包需下载vue-comilper-sfc
      }
    ]
  },
  plugins: [
    // 一个个插件对象
    new CleanWebpackPlugin(),
    //打包html文件
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈"
    }),
    //解决html base url报错
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true, //是否开启vue2 options API
      __VUE_PROD_DEVTOOLS__: false,//是否开启调试工具
    }),
    //复制文件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    //vue plugin
    new VueLoaderPlugin()
  ]
}