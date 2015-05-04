import path from 'path'

import config from 'config'
import assign from 'object-assign'

import Hapi from 'hapi'

let server = new Hapi.Server()
let viewConfig = assign(config.server.views.config, {
  engines: {
    html: require('handlebars')
  }
})

server.connection({ port: config.server.port })
server.views(viewConfig)

server.route({
  method: 'GET',
  path: `${config.assets.publicPath}{param*}`,
  handler: {
    directory: { path: config.assets.publicDir }
  }
})

var examples = ['box-model', 'box-sizing', 'document-flow', 'constrained-width']
examples = examples.concat(['media-queries', 'mobile-first', 'include-media', 'column-drop'])
examples = examples.concat(['floats', 'clearfix'])
examples = examples.concat(['positioning', 'z-index'])
examples = examples.concat(['gutter-pull'])

examples.forEach(function(name){
  server.route({
    method: '*',
    path: `/${name}`,
    handler (request, reply) { reply.view(name) }
  })
})

server.route({
  method: '*',
  path: '/',
  handler (request, reply) { reply.view('index') }
})

export default server
