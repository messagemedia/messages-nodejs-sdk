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

To view the full list visit: https://github.com/messagemedia/messages-ruby-sdk/wiki/HTTP-Status-Codes

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
* IDE (We will be using [WebStornm](https://www.jetbrains.com/webstorm/) for this guide)


## Supported Node Versions

This library supports and is [tested against](https://travis-ci.org/messagemedia/messages-nodejs-sdk) the following Node implementations:

* Node.js 14.1
* Node.js 14.2
* Node.js 14.3
* Node.js 14.4
* Node.js 14.5
* Node.js 14.6
* Node.js 14.7

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=MessageMediaMessages-Node)

Now install messagemedia-messages-sdk via npm by using
* `npm install messagemedia-messages-sdk`

Alternatively, add the following to the dependancies section of your package.json
* `"messagemedia-messages-sdk": "^1.0.0"`

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=MessageMediaMessages-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var sdk = require('messagemedia-messages-sdk');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=MessageMediaMessages-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=MessageMediaMessages-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=MessageMediaMessages-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  MessagesController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=MessagesController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const sdk = require('messagemedia-messages-sdk');

// Configuration parameters and credentials
sdk.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
sdk.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```
