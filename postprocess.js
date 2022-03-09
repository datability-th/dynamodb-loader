
// Input: a list of Objects
// Output: a list of Objects that are postprocessed
function postprocess(collection, name="") {
  const _postprocess = require(`./adapter/postprocess${name ? name : ''}`)
  return collection.map((element) => _postprocess(element))
}

module.exports = postprocess
