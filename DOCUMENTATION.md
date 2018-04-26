# MessageMedia Messages NodeJS SDK
[![Travis Build Status](https://api.travis-ci.org/messagemedia/messages-nodejs-sdk.svg?branch=master)](https://travis-ci.org/messagemedia/messages-nodejs-sdk)

The MessageMedia Messages API provides a number of endpoints for building powerful two-way messaging applications.

![picture](http://i63.tinypic.com/33tox83.jpg)

## Table of Contents
* [Authentication](#authentication)
* [Errors](#errors)
* [Information](#information)
  * [Slack and Mailing List](#mailbox_with_mail-slack-and-mailing-list)
  * [Bug Reports](#bug-bug-reports)
  * [Rate Limits](#rate-limits)
* [Getting Started](#getting-started)
* [Supported Node Versions](#supported-node-versions)

## Authentication

Authentication is done via API keys. Sign up at https://developers.messagemedia.com/register/ to get your API keys.

Requests are authenticated using HTTP Basic Auth or HMAC. Provide your API key as the auth_user_name and API secret as the auth_password.

## Errors

Our API returns standard HTTP success or error status codes. For errors, we will also include extra information about what went wrong encoded in the response as JSON. The most common status codes are listed below. 

#### HTTP Status Codes

| Code      | Title       | Description |
|-----------|-------------|-------------|
| 202 | OK | The request was successful |
| 400 | Bad Request | Bad request |
| 401 | Unauthorized | Your API key is invalid |
| 402 | Disabled feature | Feature cannot be accessed |
| 404 | Not Found |	The resource does not exist |
| 50X | Internal Server Error | An error occurred with our API |

To view the full list visit: https://github.com/messagemedia/messages-nodejs-sdk/wiki/HTTP-Status-Codes

## Information

#### :mailbox_with_mail: Slack and Mailing List

If you have any questions, comments, or concerns, please join our Slack channel:
https://developers.messagemedia.com/collaborate/slack/

Alternatively you can email us at:
developers@messagemedia.com

#### :bug: Bug reports

If you discover a problem with the SDK, we would like to know about it. Send an email to:
developers@messagemedia.com

#### :chart_with_upwards_trend: Rate Limits

To protect the stability of the API and keep it available to all users, MessageMedia enforces standard rate limiting. Currently, we have set the quota to 100 SMS per account. We may change these quotas or add new quotas (such as maximum requests per hour) in the future. Requests that hit any of our rate limits will receive a 402 response and you will be notified via email that your quota has been exceeded. If you think you’ll need a higher rate limit, drop us a line at support@messagemedia.com.au

## Getting Started

### 1. Pre-requisites
* [Node.js](https://nodejs.org/en/)
* IDE (We will be using [WebStorm](https://www.jetbrains.com/webstorm/) for this guide)

### 2. Creating a new Node.js project
* Open WebStorm
* Click on File -> New project
* In the popup window, select Node.js Express App
* The node interpreter should be automatically detected in the Node interpreter option
* Rename your project from "untitled" to "messages"
* Click create

![picture](http://i63.tinypic.com/2rpxz7p.jpg)

### 3. Installing the Messages package

* On the navigation bar, Click on View -> Tool Windows -> Terminal
* Run the following command ``` npm install messagemedia-messages-sdk ``` to install the package

![picture](http://i68.tinypic.com/63w3lv.jpg)

You will see the following displayed in the terminal after a successful installation

![picture](http://i66.tinypic.com/9k9pwx.jpg)

### 4. Adding the code
* In the folder directory structure, Click on routes -> index.js
* Replace everything on the page with the following code:

```
var express = require('express');
var router = express.Router();
const sdk = require('messagemedia-messages-sdk');
const controller = sdk.MessagesController;

/* GET home page. */
router.get('/', function(req, res, next) {

// Configuration parameters and credentials
    sdk.Configuration.basicAuthUserName = "WjO4JBbdNHHPmLQC5fZO"; // Your API Key
    sdk.Configuration.basicAuthPassword = "psh1ec3gZvDv3mxOGU52oXy1tKTYpn"; // Your Secret Key


    var body = new sdk.SendMessagesRequest({
        "messages":[
            {
                "content":"My first message",
                "destination_number":"+61451325027",
            }
        ]
    });

    controller.createSendMessages(body, function(error, response, context) {
        console.log(response)
    });

  res.render('index', { title: 'Express' });
});

module.exports = router;

```

This is what it should look like

![picture](http://i66.tinypic.com/259v7rl.jpg)

### 5. Running the application
* On the navigation bar, click on Run -> Run
* You will see the following displayed in the console after the application starts running

![picture](http://i67.tinypic.com/jjqyqw.jpg)
* Once you see that, open your browser and type in http://localhost:3000/ and press Enter
* You should see a heading that says "Express" and within a few seconds your message should be delivered to the destination number

## Supported Node Versions

This library supports and is [tested against](https://travis-ci.org/messagemedia/messages-nodejs-sdk) the following Node implementations:

* Node.js 14.1
* Node.js 14.2
* Node.js 14.3
* Node.js 14.4
* Node.js 14.5
* Node.js 14.6
* Node.js 14.7
