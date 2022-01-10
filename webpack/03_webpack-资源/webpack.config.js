//commomjs
const path = require("path")
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
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
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "img",
            name: "[name]-[hash:6].[ext]",
            esModule: true
          }
        }],
      },
    ]
  }
}