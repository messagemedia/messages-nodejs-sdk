const lib = require('messagemedia-messages-sdk');

lib.Configuration.basicAuthUserName = "YOUR_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_SECRET_KEY";

var controller = lib.RepliesController;

/* Async Call */
const promise = controller.checkReplies();
promise.then((response) => {
    console.log(response);
}, (err) => {
    console.log(err);
});

/* Sync Call */
/*controller.checkReplies(function(error, response, context) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});*/
