require('babel/register');

var server = require('./server');

server.start(function() {
  console.log('Server running at: ', this.info.uri);
}.bind(server));
