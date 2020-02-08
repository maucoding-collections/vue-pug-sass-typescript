const webpack = require("webpack");
const path = require("path");
const target_dir = "../../dist/";
const CopyWebpackPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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

  module: {
    rules: [
      {
        test: /\.sass$/,
        exclude: /(node_modules)/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: "css-loader"
      },
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
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};
