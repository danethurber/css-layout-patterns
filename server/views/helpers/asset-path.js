import path from 'path'
import fs from 'fs'

import config from 'config'

var assetManifest = {}

var manifestPath = path.join(config.assets.publicDir, 'manifest.json')
var publicPath = config.assets.publicPath

fs.readFile(manifestPath, 'utf8', function (err, data) {
  if (err) return console.log(err)
  assetManifest = JSON.parse(data)
});

export default function(assetPath) {
  return publicPath + assetManifest[assetPath]
}
