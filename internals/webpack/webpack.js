const webpack = require("webpack");
const path = require("path");
const target_dir = "../../dist/";
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    app: ["./src/index.js"]
  },

  mode: process.env.NODE_ENV || "development",

  output: {
    path: path.resolve(__dirname, target_dir),
    filename: "[name].js",
    publicPath: "/dist/"
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../index.html"),
        to: path.resolve(__dirname, target_dir)
      }
    ])
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: "vue-loader"
      },
    ]
  },

  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]

  // resolve: {
  //   extensions: [".js", ".vue"],
  //   alias: {
  //     vue$: "vue/dist/vue.esm.js"
  //   }
  // },
};
