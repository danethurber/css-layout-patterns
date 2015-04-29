import Showdown from 'showdown'
let converter = new Showdown.converter()

export default function(options) {
  let input = options.fn(this)
  return converter.makeHtml(input)
}
