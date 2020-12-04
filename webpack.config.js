const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    path: path.join(__dirname, ""),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: [/node_modules/, require.resolve("./src/index.html")]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}