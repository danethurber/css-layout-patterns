export default function(name, opts) {
  let blocks = this._blocks || (this._blocks = {})
  let block  = blocks[name] || (blocks[name] = [])

  block.push(opts.fn(this))
}
