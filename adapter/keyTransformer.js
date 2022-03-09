// Object Mapper from the CSV Name to the actual Name
const name2Key = {
  "Employee ID": "id",
  Type: "employeeType",
  Nickname: "nickName",
  Prefix: "nameTitle",
  "First Name": "fullName",
  Surname: "lastName",
  Gender: "sex",
  Nationality: "nationality",
  "Mobile No.": "tel",
  "Birth Date": "birthDate",
  "National ID": "personalID",
  "Hire Date": "hireDate",
  "Retire Date": "retireDate",
  Position: "positionID",
  Department: "departmentID",
  "Highest Education": "educationHighest",
  "ค่าตำแหน่ง/ค่าฝีมือ": "salary",
  Salary: "unusedLatestSalary",
}

module.exports = name2Key