const sdk = require('messagemedia-messages-sdk');
const controller = sdk.RepliesController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // Your Secret Key


var messageId = "YOUR_MESSAGE_ID";

controller.getCheckReplies(function(error, response, context) {
  console.log(response)
});
