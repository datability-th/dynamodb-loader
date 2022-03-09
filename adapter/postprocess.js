// Postprocessor Function
// Input: Element of the Collection
// Output: Postprocessed Element of the Collection
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    Type: "POSITION",
    __typename: "Position",
    PK: `POSITION|${element.id}`,
    SK: `POSITION|${element.id}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  return element
}

module.exports = _postprocess
