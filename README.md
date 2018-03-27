# MessageMedia Messages NodeJS SDK
[![Travis Build Status](https://api.travis-ci.org/messagemedia/messages-nodejs-sdk.svg?branch=master)](https://travis-ci.org/messagemedia/messages-nodejs-sdk)
[![npm](https://img.shields.io/badge/npm-v1.1.0-blue.svg)](https://www.npmjs.com/package/messagemedia-messages-sdk)

The MessageMedia Messages API provides a number of endpoints for building powerful two-way messaging applications.

## ⭐️ Installing via NPM
Now install messagemedia-messages-sdk via npm by using:
* `npm install messagemedia-messages-sdk`

Alternatively, add the following to the dependencies section of your package.json:
* `"messagemedia-messages-sdk": "^1.0.0"`

## 🎬 Get Started
It's easy to get started. Simply enter the API Key and secret you obtained from the [MessageMedia Developers Portal](https://developers.messagemedia.com) into the code snippet below and a mobile number you wish to send to.

### 🚀 Send an SMS
* Destination numbers (`destination_number`) should be in the [E.164](http://en.wikipedia.org/wiki/E.164) format. For example, `+61491570156`.
```javascript
const sdk = require('messagemedia-messages-sdk');
const controller = sdk.MessagesController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_SECRET_KEY"; // Your Secret Key


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
```

### 🕓 Get Status of a Message
You can get a messsage ID from a sent message by looking at the `message_id` from the response of the above example.
```javascript
const sdk = require('messagemedia-messages-sdk');
const controller = sdk.MessagesController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_SECRET_KEY"; // Your Secret Key


var messageId = "YOUR_MESSAGE_ID";

controller.getMessageStatus(messageId, function(error, response, context) {
  console.log(response)
});
```

### 💬 Get replies to a message
You can check for replies that are sent to your messages
```javascript
const sdk = require('messagemedia-messages-sdk');
const controller = sdk.RepliesController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // Your Secret Key


var messageId = "YOUR_MESSAGE_ID";

controller.getCheckReplies(function(error, response, context) {
  console.log(response)
});
```

### ✅ Check Delivery Reports
This endpoint allows you to check for delivery reports to inbound and outbound messages.
```javascript
const sdk = require('messagemedia-messages-sdk');
const controller = sdk.DeliveryReportsController;


// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "YOUR_API_KEY"; // Your API Key
sdk.Configuration.basicAuthPassword = "YOUR_API_SECRET"; // Your Secret Key


controller.getCheckDeliveryReports(function(error, response, context) {
  console.log(response)
});
```

## 📕 Documentation
Check out the [full API documentation](DOCUMENTATION.md) for more detailed information.

## 😕 Got Stuck?
Please contact developer support at developers@messagemedia.com or check out the developer portal at [developers.messagemedia.com](https://developers.messagemedia.com/)

## 📃 License
Apache License. See the [LICENSE](LICENSE) file.
