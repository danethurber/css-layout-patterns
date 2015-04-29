var path = require('path');

var paths = {
  root: path.join(__dirname, '..')
};

module.exports = {
  paths: paths,

  assets: {
    entryDir: path.join(paths.root, 'client'),
    publicPath: '/assets/',
    publicDir: path.join(paths.root, 'public/assets')
  },

  server: {
    port: process.env.PORT || 3000,
    views: {
      config: {
        relativeTo: path.join(paths.root, 'server'),
        path: './views',
        layout: 'application',
        layoutPath: './views/layouts',
        helpersPath: './views/helpers'
      }
    }
  }
};
