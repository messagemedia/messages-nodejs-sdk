const sdk = require('messagemedia-messages-sdk');
const auth = sdk.AuthHelper;
const controller = sdk.MessagesController;


// Configuration parameters and credentials
var authUsername = "YOUR_API_KEY"; // Your API Key
var authPassword = "YOUR_API_SECRET"; // Your Secret Key
var useHmac = false; // Change to true if you are using HMAC keys

auth(sdk, authUsername, authPassword, useHmac);


var messageId = "YOUR_MESSAGE_ID";

controller.getMessageStatus(messageId, function(error, response, context) {
  console.log(response)
});
