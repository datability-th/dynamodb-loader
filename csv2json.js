var fs = require("fs");
var csv = require("csv-parse/sync");
const yargs = require("yargs/yargs");
const AWS = require("aws-sdk");

// Parsing CSV2JSON
// node csv2json.js -i csv/data.csv -o data2.json

const argv = yargs(process.argv.slice(2))
  .option("input", {
    alias: "i",
    type: "string",
    description: "Input CSV file",
    default: "data/data.csv",
    demandOption: true,
  })
  .option("output", {
    alias: "o",
    type: "string",
    description: "Output JSON file",
    default: "data/data.json",
    demandOption: true,
  })
  .help()
  .parse();

const csvData = fs.readFileSync(argv.input, "utf8");
const parsedCsv = csv.parse(csvData);

var collection = parsedCsv.slice(); //COPY
// console.log(collection);

var keys = collection.shift(); //KEY
// console.log(keys);

console.log("============================================");

// 2.1 For all elements in the collection
collection = collection.map((e) => {
  // 2.2 Define an object
  var obj = {};
  // 2.3 For all keys in the object
  for (const [i, key] of keys.entries()) {
    if (e[i] === "" || e[i].length === 0 || e[i] === "null") {
      // 2.3.1 Ignore if it is null/blank
      continue;
    } else if (/\[.*\]/.test(e[i])) {
      // 2.3.2 Handle Opens and Ends with [ ] . JSON.parse() to List
      // This means it's a list
      // And Converter output  https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/Converter.html
      var parsedList = JSON.parse(e[i]);

      // Inside the list will be dynamo Objects!!
      if (parsedList.length > 0) {
        parsedList = parsedList.map((e) => {
          return AWS.DynamoDB.Converter.output(e);
        });
      }
      obj[key] = parsedList;
      console.log("EXAMPLE", e[i]);
      console.log("OUT>> ", JSON.stringify(parsedList));
    } else if (/{.*}/.test(e[i])) {
      // 2.3.2 Handle Opens and Ends with { }. JSON.parse() to Object
      // This means it's a map?
      // And Converter output  https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/Converter.html
      var parsedMap = AWS.DynamoDB.Converter.output(JSON.parse(e[i]));
      obj[key] = parsedMap;
    } else {
      obj[key] = e[i];
    }
  }

  console.log(obj);
  return obj;
});

// Write File via stringify
fs.writeFileSync(argv.output, JSON.stringify(collection, undefined, 2));

console.log("DONE");