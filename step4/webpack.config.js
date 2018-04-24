const
  path = require('path'),
  webpack = require('webpack'),
  CleanupPlugin = require('webpack-cleanup-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')
;

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }]]
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }]
      },
      {
        test:/\.css$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'styles/[name].[ext]'
          }
        }]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanupPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 3000,
    hot: true
  }
};

module.exports = config;