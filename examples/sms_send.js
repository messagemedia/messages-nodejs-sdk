const sdk = require('messagemedia-messages-sdk');
const controller = sdk.MessagesController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // Your Secret Key


var body = new sdk.SendMessagesRequest({
   "messages":[
      {
         "content":"My first message",
         "destination_number":"YOUR_MOBILE_NUMBER",
      }
   ]
});

controller.createSendMessages(body, function(error, response, context) {
  console.log(response)
});
