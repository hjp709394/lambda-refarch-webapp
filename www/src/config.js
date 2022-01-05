// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "gk94i8h038uepea7d6nctvjti",     // CognitoClientID
  "api_base_url": "http://127.0.0.1:3000/",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "http://localhost:8080/"                                      // AmplifyURL
};

export default config;
