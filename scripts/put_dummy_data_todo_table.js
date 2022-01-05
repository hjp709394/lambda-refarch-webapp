const AWS = require("aws-sdk");
const { v1: uuidv1 } = require("uuid");
const DDB = new AWS.DynamoDB({ apiVersion: "2012-10-08" });

const TABLE_NAME = "TodoTable";
const ENDPOINT_OVERRIDE = "http://172.17.83.252:8000";
const REGION = 'us-west-2';

const options = { region: REGION };
AWS.config.update({ region: REGION });

options.endpoint = ENDPOINT_OVERRIDE;

const docClient = new AWS.DynamoDB.DocumentClient(options);

username = "bla"

let usernameField = {
    "cognito-username": username,
};

let dISO = new Date().toISOString();
let auto_fields = {
    id: uuidv1(),
    creation_date: dISO,
    lastupdate_date: dISO,
};

let body = {
    item: "bla-item"
}
let item_body = {
    ...usernameField,
    ...auto_fields,
    ...body,
};

const params = {
    TableName: TABLE_NAME,
    Item: item_body,
};

docClient.put(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("succeed");
        console.log(data)
    }
});
