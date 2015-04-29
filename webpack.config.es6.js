import path from 'path'
import config from 'config'
import webpack from 'webpack'

import ManifestPlugin from 'webpack-manifest-plugin'

var paths = {
  lib: path.join(config.paths.root, 'client', 'lib')
}

var opts = {
  devtool: 'inline-source-map',

  entry: {
    main: path.join(config.assets.entryDir, 'javascripts', 'main')
  },

  output: {
    publicPath: config.assets.publicPath,
    path: config.assets.publicDir,
    filename: '[name].[hash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?stage=1&optional=runtime',
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },

  plugins: [
    new ManifestPlugin()
  ],

  resolve: {
    root: path.join(config.paths.root, 'node_modules'),
    modulesDirectories: ['node_modules', paths.lib],
    extensions: ['', '.js', '.scss', '.css']
  },

  resolveLoader: {
    root: path.join(config.paths.root, 'node_modules')
  }
}

export default opts
