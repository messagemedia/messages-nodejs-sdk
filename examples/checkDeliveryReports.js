const lib = require('messagemedia-messages-sdk');

lib.Configuration.basicAuthUserName = "YOUR_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_SECRET_KEY";

var controller = lib.DeliveryReportsController;

/* Async Call */
const promise = controller.checkDeliveryReports();
promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});

/* Sync Call */
/*controller.checkDeliveryReports(function(error, response, context) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});*/
