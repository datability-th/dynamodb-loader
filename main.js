// From https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.02.html
var AWS = require("aws-sdk");
var fs = require("fs");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

console.log("Table ", process.env.DYNAMO_TABLE_NAME)
console.log("REGION ", process.env.AWS_REGION)
console.log("accessKeyId ", process.env.AWS_ACCESS_KEY)
console.log("secretAccessKey", process.env.AWS_SECRET_ACCESS_KEY)
// For debug
// console.debug("AccessKey ", process.env.AWS_ACCESS_KEY)
// console.debug("secretAccessKey ", process.env.AWS_SECRET_ACCESS_KEY)

const db = new AWS.DynamoDB.DocumentClient();

console.log("Importing data into DynamoDB. Please wait.");

const allData = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));

allData.map( data => {
    // const putParams = {
    //     TableName: process.env.DYNAMO_TABLE_NAME,
    //     Item: data
    // };

    // db.put(putParams, (err, output) => {
    //     if(err) console.error("UNABLE TO ADD ", err)
    //     else console.log("PutItem succeeded: ", data)
    // });
    // console.log("DATA",data)
});