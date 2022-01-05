const AWS = require("aws-sdk");
const DDB = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

const TABLE_NAME = "TodoTable";
const ENDPOINT_OVERRIDE = "http://172.17.83.252:8000";
const REGION = 'us-west-2';

const options = { region: REGION };
AWS.config.update({ region: REGION });

options.endpoint = ENDPOINT_OVERRIDE;

const docClient = new AWS.DynamoDB.DocumentClient(options);

username = "bla"

let params = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "#username = :username",
    ExpressionAttributeNames: {
        "#username": "cognito-username",
    },
    ExpressionAttributeValues: {
        ":username": username,
    },
};

docClient.query(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("succeed");
        console.log(data)
    }
});
