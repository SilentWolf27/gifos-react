const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@components': path.resolve(__dirname, "./src/components"),
      '@containers': path.resolve(__dirname, "./src/containers"),
      '@styles': path.resolve(__dirname, "./src/styles"),
      '@assets': path.resolve(__dirname, "./src/assets"),
      '@utils': path.resolve(__dirname, "./src/utils"),
      '@pages': path.resolve(__dirname, "./src/pages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.(png|svg|jpg)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
  devServer: {
    open: true,
    port: 5500,
  },
};
