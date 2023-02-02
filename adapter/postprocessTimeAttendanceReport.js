
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    shiftMinute: awareNull_Int(element.shiftMinute),
    inDiffMinute: awareNull_Int(element.inDiffMinute),
    breakDiffMinute: awareNull_Int(element.breakDiffMinute),
    outDiffMinute: awareNull_Int(element.outDiffMinute),
    workingMinute: awareNull_Int(element.workingMinute),
    overtimeMinute: awareNull_Int(element.overtimeMinute),
    overtimeApproveMinute: awareNull_Int(element.overtimeApproveMinute),
    leaveMinute: awareNull_Int(element.leaveMinute),
    leaveDeductMinute: awareNull_Int(element.leaveDeductMinute)
  }
  return element
}

function awareNull_Int(element) {
  return element ? parseInt(element) : null
}

function awareNull_Float(element) {
  return element ? parseFloat(element) : null
}

module.exports = _postprocess