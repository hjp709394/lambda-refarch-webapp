// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "gk94i8h038uepea7d6nctvjti",     // CognitoClientID
  "api_base_url": "https://jmht0a3hwg.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d21uia4ykp57xp.amplifyapp.com"                                      // AmplifyURL
};

export default config;
