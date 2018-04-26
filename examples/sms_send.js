const sdk = require('messagemedia-messages-sdk');
const auth = sdk.AuthHelper;
const controller = sdk.MessagesController;


var authUsername = "YOUR_API_KEY"; // Your API Key
var authPassword = "YOUR_API_SECRET"; // Your Secret Key
var useHmac = false; // Change to true if you are using HMAC keys

auth(sdk, authUsername, authPassword, useHmac);


var body = new sdk.SendMessagesRequest({
   "messages":[
      {
         "content":"My first message",
         "destination_number":"DESTINATION_NUMBER",
      }
   ]
});

controller.createSendMessages(body, function(error, response, context) {
  console.log(response)
});
