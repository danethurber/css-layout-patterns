export default function(name) {
  let blocks = this._blocks
  let content = blocks && blocks[name]

  return content ? content.join('\n') : null;
}
