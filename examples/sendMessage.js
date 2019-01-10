const lib = require('messagemedia-messages-sdk');

/* Basic Auth */
lib.Configuration.basicAuthUserName = "YOUR_BASIC_API_KEY";
lib.Configuration.basicAuthPassword = "YOUR_BASIC_SECRET_KEY";

/* HMAC
lib.Configuration.hmacAuthUserName = "YOUR_HMAC_API_KEY";
lib.Configuration.hmacAuthPassword = "YOUR_HMAC_SECRET_KEY";
*/

var controller = lib.MessagesController;

let body = new lib.SendMessagesRequest();

body.messages = [];

body.messages[0] = new lib.Message();

body.messages[0].content = 'Hello world!';
body.messages[0].destinationNumber = '+61491570156';
body.messages[0].deliveryReport = false;
body.messages[0].callbackUrl = 'https://mycallback.com';
body.messages[0].format = [lib.FormatEnum.SMS];
body.messages[0].messageExpiryTimestamp = moment('2018-12-01T00:00:00Z').parseZone('2018-12-01T00:00:00Z');
body.messages[0].metadata = JSON.parse('{"key":"value"}');
body.messages[0].scheduled = moment('2018-12-21T00:00:00Z').parseZone('2018-12-21T00:00:00Z');
body.messages[0].sourceNumber = '+61491570156';
body.messages[0].sourceNumberType = lib.SourceNumberTypeEnum.INTERNATIONAL;

controller.sendMessages(body, function(error, response, context) {
  if (error) {
    console.log(error)
  } else {
    console.log(response);
  }
});
