import webpack from 'webpack'

var opts = {
  devtool: 'inline-source-map',
  entry: './lib/main.js',

  output: {
    path: './public/assets',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style',
                  'css?sourceMap',
                  'sass?sourceMap']
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.css']
  }
}

export default opts
