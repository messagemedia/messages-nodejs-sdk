const sdk = require('messagemedia-messages-sdk');
const auth = sdk.AuthHelper;
const controller = sdk.DeliveryReportsController;


// Configuration parameters and credentials
var authUsername = "YOUR_API_KEY"; // Your API Key
var authPassword = "YOUR_API_SECRET"; // Your Secret Key
var useHmac = false; // Change to true if you are using HMAC keys

auth(sdk, authUsername, authPassword, useHmac);


controller.getCheckDeliveryReports(function(error, response, context) {
  console.log(response)
});
