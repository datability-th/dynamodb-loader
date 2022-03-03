var fs = require("fs");
var csv = require('csv-parse/sync');

const csvData = fs.readFileSync('csv/results.csv', 'utf8')
const parsedCsv = csv.parse(csvData)


var collection = parsedCsv.slice(); //COPY
console.log(collection)

var keys = collection.shift();     //KEY
console.log(keys)

console.log("============================================")

collection = collection.map( e => {
    var obj = {};
    keys.forEach((key, i) => {
         if(e[i] === "")
         {
          
         }else if(e[i].length === 0)
         {
          
         }
         else
         {
          obj[key] = e[i];
         }
         
        
    });
    return obj;
});

console.log(JSON.stringify(collection,undefined,2),"TO -J Json")



fs.writeFileSync('data/data.json', JSON.stringify(collection,"ping",2))

console.log("DONE")