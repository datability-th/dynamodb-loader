
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    salary: awareNull_Float(element.salary),
    unusedLatestSalary: awareNull_Float(element.unusedLatestSalary),
    leaveFormMinute: awareNull_Int(element.leaveFormMinute),
    overtimeMinute: awareNull_Int(element.overtimeMinute),
    overtimeMultiply: awareNull_Float(element.overtimeMultiply)

  }
  return element
}

function awareNull_Int(element) {
  return element ? parseInt(element) : 0
}

function awareNull_Float(element) {
  return element ? parseFloat(element) : 0
}

module.exports = _postprocess