// Object Mapper from the CSV Name to the actual Name
const name2Key = {
  PK: "PK2123",
}

// Input: a list of string of Keys
// Output: corresponding string of Keys of given Name
function transform(keys) {
  return keys.map((key) => (name2Key.hasOwnProperty(key) ? name2Key[key] : key))
}

module.exports = transform
