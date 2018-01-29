const sdk = require('messagemedia-messages-sdk');
const controller = sdk.DeliveryReportsController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // Your Secret Key


controller.getCheckDeliveryReports(function(error, response, context) {
  console.log(response)
});
