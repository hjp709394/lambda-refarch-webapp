// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "626jnqokvsule4rdaeho04k0fi",     // CognitoClientID
  "api_base_url": "https://i7mhkbbn60.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-todo.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d196qmplwds848.amplifyapp.com"                                      // AmplifyURL
};

export default config;

