const path = require("path");

module.exports = {
  entry: "./script.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./"),
      filename: "main.js",
    },
    port: 3000, // Specify the port you want here
    open: true, // Automatically opens the browser
    hot: true, // Enables Hot Module Replacement
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
