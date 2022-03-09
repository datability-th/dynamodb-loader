// Postprocessor Function
// Input: Element of the Collection
// Output: Postprocessed Element of the Collection
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    HELLO: "YAY",
  }
  return element
}

// Input: a list of Objects
// Output: a list of Objects that are postprocessed
function postprocess(collection) {
  return collection.map((element) => _postprocess(element))
}

module.exports = postprocess
