
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    leaveMinute: awareNull_Int(element.leaveMinute),
    overtimeMinute: awareNull_Int(element.overtimeMinute),
    isLeaveDeductMoney: awareNull_Boolean(element.isLeaveDeductMoney)

  }
  return element
}

function awareNull_Int(element) {
  return element ? parseInt(element) : 0
}

function awareNull_Float(element) {
  return element ? parseFloat(element) : 0
}

function awareNull_Boolean(element) {
  return (element === true || element === "true")
}

module.exports = _postprocess