/* This is for prepaid accounts ONLY */

const lib = require('messagemedia-messages-sdk');

/* Basic Auth */
lib.Configuration.basicAuthUserName = "YOUR_BASIC_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_BASIC_SECRET_KEY";

/* HMAC
lib.Configuration.hmacAuthUserName = "YOUR_HMAC_API_KEY";
lib.Configuration.hmacAuthPassword = "YOUR_HMAC_SECRET_KEY";
*/

var controller = lib.MessagesController;

const promise = controller.checkCreditsRemaining();

controller.checkCreditsRemaining(function(error, response, context) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
