// Input: a list of string of Keys
// Output: corresponding string of Keys of given Name
function transform(keys, name="") {
  const name2Key = require(`./adapter/keyTransformer${name ? name : ''}`)
  return keys.map((key) => (name2Key.hasOwnProperty(key) ? name2Key[key] : key))
}

module.exports = transform
