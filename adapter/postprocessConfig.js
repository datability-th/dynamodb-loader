
function _postprocess(element) {
  // Write your code here!
  element = {
    ...element,
    // TimeAttendance
    maxWorkInEarlyMinute: awareNull_Int(element.maxWorkInEarlyMinute),
    workInEarlyPaidRate: awareNull_Int(element.workInEarlyPaidRate),
    maxWorkInLateMinute: awareNull_Int(element.maxWorkInLateMinute),
    workInLateQuotaMinute: awareNull_Int(element.workInLateQuotaMinute),
    maxBreakOvertimeMinute: awareNull_Int(element.maxBreakOvertimeMinute),
    breakOvertimeQuotaMinute: awareNull_Int(element.breakOvertimeQuotaMinute),
    breakOvertimeDeductRate: awareNull_Int(element.breakOvertimeDeductRate),
    maxBreakEarlyMinute: awareNull_Int(element.maxBreakEarlyMinute),
    breakEarlyPaidRate: awareNull_Int(element.breakEarlyPaidRate),
    maxWorkOutEarlyMinute: awareNull_Int(element.maxWorkOutEarlyMinute),
    workOutEarlyQuotaMinute: awareNull_Int(element.workOutEarlyQuotaMinute),
    workOutEarlyDeductRate: awareNull_Int(element.workOutEarlyDeductRate),
    maxWorkOutLateMinute: awareNull_Int(element.maxWorkOutLateMinute),
    isWorkOutLatePaidRate: awareNull_Int(element.isWorkOutLatePaidRate),
    // Overtime
    overtimeBeforeMinute: awareNull_Int(element.overtimeBeforeMinute),
    overtimeAfterMinute: awareNull_Int(element.overtimeAfterMinute),
    overtimeBreakBeforeMinute: awareNull_Int(element.overtimeBreakBeforeMinute),
    overtimeBreakAfterMinute: awareNull_Int(element.overtimeBreakAfterMinute),
    // Leave
    leaveBeforehandDay: awareNull_Int(element.leaveBeforehandDay),
    maxLeaveCompound: awareNull_Int(element.maxLeaveCompound),
    isActive: awareNull_Boolean(element.isActive),
    isLeaveBeforehand: awareNull_Boolean(element.isLeaveBeforehand),
    isLeaveDiligent: awareNull_Boolean(element.isLeaveDiligent),
    isLeaveCompound: awareNull_Boolean(element.isLeaveCompound),
    isLookupNotWorkday: awareNull_Boolean(element.isLookupNotWorkday),
    isLeaveAfterhand: awareNull_Boolean(element.isLeaveAfterhand),
    isCountProbation: awareNull_Boolean(element.isCountProbation),
    isExceedQuota: awareNull_Boolean(element.isExceedQuota),
    isLeaveOnce: awareNull_Boolean(element.isLeaveOnce),
    // Payroll
    periodStart: awareNull_Int(element.periodStart),
    period1Day: awareNull_Int(element.period1Day),
    period2Day: awareNull_Int(element.period2Day),
    period3Day: awareNull_Int(element.period3Day),
    // Social
    employeePercent: awareNull_Float(element.employeePercent),
    employerPercent: awareNull_Float(element.employerPercent),
    // Welfare
    maxCompound: awareNull_Int(element.maxCompound)


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