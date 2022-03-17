# DynamoDB Loader

Loading JSON data to DynamoDB the simplest and consistent way!

## Step 1. Put your data in data.json

## Step 2. Setup environment variables in .env

This includes your AWS application ID and secret

## Step 3. Run Docker

```bash
docker run --rm --env-file .env -v $(pwd)/data:/data knighth/dynamodb-loader:1.0
```


# Local Testing

Convert CSV to JSON with utility + Transformation + Postprocess
```bash
node csv2json.js -i data/data.csv -o data/data2.json -t -p
```

Manually Run main.js to push to AWS DynamoDb
```bash
node main.js
```

# Option#2: Local Testing with Docker Build
```
docker build -t dynamodb-loader .
```

```bash
docker run --rm --env-file .env -v $(pwd)/data:/data dynamodb-loader
```

# Why DynamoDB Loader?

Working with DynamoDB is frustrating. There is no easy way to load csv/json to the database like SQL. We need a simple tool to just work. 

Going on StackOverflow would yield various ways to do the same thing, using programmatic tools to upload the data. 

AWS wants us to use DataPipeline which is just more tools for us to learn.

We're dockerizing it and making it easy to use.

References:

[SO Apr 28, 2018: AWS - import JSON file to load Dynamo table ](https://stackoverflow.com/questions/50079169/aws-import-json-file-to-load-dynamo-table)

[SO Sep 4, 2020: AWS CLI: JSON load into DynamoDB](https://stackoverflow.com/questions/63748579/aws-cli-json-load-into-dynamodb)

[AWS Workshop - Using Python Script to Load Data](https://amazon-dynamodb-labs.workshop.aws/design-patterns/ex1capacity/step2.html)

[AWS Getting Started with the AWS SDKs - Load Sample Data in DynamoDB with AWS SDK for JavaScript](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.02.html)