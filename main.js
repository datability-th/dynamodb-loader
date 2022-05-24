// From https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.02.html
require('dotenv').config()
var AWS = require("aws-sdk")
var fs = require("fs")
const yargs = require("yargs/yargs")

// Parsing CSV2JSON
// node csv2json.js -i csv/data.csv -o data2.json
const argv = yargs(process.argv.slice(2))
  .option("input", {
    alias: "i",
    type: "string",
    description: "Input JSON file",
    default: "data/data.json",
    demandOption: true,
  })
  .option("tablename", {
    alias: "t",
    type: "string",
    description: "Input Table Name",
    default: "SAMPLE_TABLE",
    demandOption: false,
  })
  .help()
  .parse()

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const TableName = argv.tablename ? argv.tablename : process.env.DYNAMO_TABLE_NAME

console.log("TableName ", TableName)
console.log("REGION ", process.env.AWS_REGION)
console.log("accessKeyId ", process.env.AWS_ACCESS_KEY)
console.log("secretAccessKey", process.env.AWS_SECRET_ACCESS_KEY)
// For debug
// console.debug("AccessKey ", process.env.AWS_ACCESS_KEY)
// console.debug("secretAccessKey ", process.env.AWS_SECRET_ACCESS_KEY)

const db = new AWS.DynamoDB.DocumentClient()

console.log("Importing data into DynamoDB. Please wait.")

const allData = JSON.parse(fs.readFileSync(argv.input, "utf8"))

allData.map((data) => {
  const putParams = {
    TableName,
    Item: data,
  }

  db.put(putParams, (err, output) => {
    if (err) console.error("UNABLE TO ADD ", err)
    else console.log("PutItem succeeded: ", data)
  })
  // console.log("DATA",data)
})
