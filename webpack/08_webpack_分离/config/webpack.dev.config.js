// npm i webpack-merge -D
const {merge} =require ("webpack-merge")
const commonConfig= require("./webpack.comm.config")
module.exports =merge (commonConfig, {
  mode: "development",
  devtool: "source-map", //默认eval 会生成js文件映射可以定位源代码调试
  devServer: {
    // contentBase:"./abc"
    static: "./public", //若是没有找到去public下查找
    hot: true,
    host: "0.0.0.0",
    port: 7777,
    compress: true, //开启gizp压缩
    //请求代理
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
})