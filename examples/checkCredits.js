/* This is for prepaid accounts ONLY */

const lib = require('messagemedia-messages-sdk');

lib.Configuration.basicAuthUserName = "YOUR_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_SECRET_KEY";

var controller = lib.MessagesController;

const promise = controller.checkCreditsRemaining();

controller.checkCreditsRemaining(function(error, response, context) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
