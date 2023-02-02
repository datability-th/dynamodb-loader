// Postprocessor Function
// Input: Element of the Collection
// Output: Postprocessed Element of the Collection
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    employeeCount: awareNull_Int(element.employeeCount),
    employeeHireCount: awareNull_Int(element.employeeHireCount),
    employeeRetireCount: awareNull_Int(element.employeeRetireCount),
    totalPayroll: awareNull_Float(element.totalPayroll),
    workingMinute: awareNull_Int(element.workingMinute),
    leaveMinute: awareNull_Int(element.leaveMinute),
    leaveDeductMinute: awareNull_Int(element.leaveDeductMinute),
    otTypeWorkMinute: awareNull_Int(element.otTypeWorkMinute),
    otTypeOTMinute: awareNull_Int(element.otTypeOTMinute),
    income: awareNull_Float(element.income),
    otTypeWorkIncome: awareNull_Float(element.otTypeWorkIncome),
    otTypeOTIncome: awareNull_Float(element.otTypeOTIncome),
    workDiligentIncome: awareNull_Float(element.workDiligentIncome),
    inEarlyIncome: awareNull_Float(element.inEarlyIncome),
    breakEarlyIncome: awareNull_Float(element.breakEarlyIncome),
    outLateIncome: awareNull_Float(element.outLateIncome),
    netPositiveIncome: awareNull_Float(element.netPositiveIncome),
    inLateExpense: awareNull_Float(element.inLateExpense),
    breakLateExpense: awareNull_Float(element.breakLateExpense),
    outEarlyExpense: awareNull_Float(element.outEarlyExpense),
    netNegativeIncome: awareNull_Float(element.netNegativeIncome),
    netIncome: awareNull_Float(element.netIncome),
    daysInPeriod: awareNull_Int(element.daysInPeriod),

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
