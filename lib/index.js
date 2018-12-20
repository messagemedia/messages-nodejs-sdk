/**
  * @module messagemedia-messages
  *
  * The MessageMedia Messages API provides a number of endpoints for building powerful two-way
  * messaging applications. The Messages API provides access to three main resources:  * Messages -
  * Messages delivered from an application to a handset.  * Delivery Reports - Real time reports on
  * the delivery status of a message. As a message   is processed, it's status may change several
  * times before it is finally delivered to a handset.  * Replies - Messages sent from a handset to
  * an application. These messages are typically a reply   to a previously sent message.  ![Message
  * Flow](https://i.imgur.com/jJeHwf5.png)  [![Run in Postman](https://run.pstmn.io/button.
  * svg)](https://app.getpostman.com/run-collection/11b2a979fa10c6564f77)
  */

'use strict';

const Configuration = require('./configuration');
const MessagesController = require('./Controllers/MessagesController');
const DeliveryReportsController = require('./Controllers/DeliveryReportsController');
const RepliesController = require('./Controllers/RepliesController');
const ConfirmDeliveryReportsAsReceivedRequest1 =
  require('./Models/ConfirmDeliveryReportsAsReceivedRequest1');
const ConfirmDeliveryReportsAsReceivedRequest =
  require('./Models/ConfirmDeliveryReportsAsReceivedRequest');
const CheckDeliveryReportsResponse = require('./Models/CheckDeliveryReportsResponse');
const ConfirmRepliesAsReceivedRequest1 = require('./Models/ConfirmRepliesAsReceivedRequest1');
const ConfirmRepliesAsReceivedRequest = require('./Models/ConfirmRepliesAsReceivedRequest');
const VendorAccountId = require('./Models/VendorAccountId');
const CheckRepliesResponse = require('./Models/CheckRepliesResponse');
const SourceNumberTypeEnum = require('./Models/SourceNumberTypeEnum');
const CancelScheduledMessageRequest = require('./Models/CancelScheduledMessageRequest');
const Format1Enum = require('./Models/Format1Enum');
const SendMessagesRequest = require('./Models/SendMessagesRequest');
const FormatEnum = require('./Models/FormatEnum');
const Status2Enum = require('./Models/Status2Enum');
const Reply = require('./Models/Reply');
const DeliveryReport = require('./Models/DeliveryReport');
const GetMessageStatusResponse = require('./Models/GetMessageStatusResponse');
const StatusEnum = require('./Models/StatusEnum');
const Message = require('./Models/Message');
const SendMessagesResponse = require('./Models/SendMessagesResponse');
const SendMessages400ResponseException = require('./Exceptions/SendMessages400ResponseException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-messages
    Configuration,
    // controllers of messagemedia-messages
    MessagesController,
    DeliveryReportsController,
    RepliesController,
    // models of messagemedia-messages
    ConfirmDeliveryReportsAsReceivedRequest1,
    ConfirmDeliveryReportsAsReceivedRequest,
    CheckDeliveryReportsResponse,
    ConfirmRepliesAsReceivedRequest1,
    ConfirmRepliesAsReceivedRequest,
    VendorAccountId,
    CheckRepliesResponse,
    SourceNumberTypeEnum,
    CancelScheduledMessageRequest,
    Format1Enum,
    SendMessagesRequest,
    FormatEnum,
    Status2Enum,
    Reply,
    DeliveryReport,
    GetMessageStatusResponse,
    StatusEnum,
    Message,
    SendMessagesResponse,
    // exceptions of messagemedia-messages
    SendMessages400ResponseException,
    APIException,
};

module.exports = initializer;
