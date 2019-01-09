const lib = require('messagemedia-messages-sdk');

lib.Configuration.basicAuthUserName = "YOUR_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_SECRET_KEY";

var controller = lib.RepliesController;

controller.checkReplies(function(error, response, context) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
