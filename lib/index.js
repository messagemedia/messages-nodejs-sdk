/**
  * @module messagemedia-messages
  *
  * The MessageMedia Messages API provides a number of endpoints for building powerful two-way
  * messaging applications.
  */

'use strict';

const Configuration = require('./configuration');
const AuthHelper = require('./AuthHelper');
const Logger = require('./LogConfig');
const MessagesController = require('./Controllers/MessagesController');
const DeliveryReportsController = require('./Controllers/DeliveryReportsController');
const RepliesController = require('./Controllers/RepliesController');
const CheckDeliveryReportsResponse = require('./Models/CheckDeliveryReportsResponse');
const ConfirmRepliesAsReceivedRequest8 = require('./Models/ConfirmRepliesAsReceivedRequest8');
const ConfirmRepliesAsReceivedRequest = require('./Models/ConfirmRepliesAsReceivedRequest');
const CheckRepliesResponse = require('./Models/CheckRepliesResponse');
const CancelScheduledMessageRequest = require('./Models/CancelScheduledMessageRequest');
const SendMessagesResponse = require('./Models/SendMessagesResponse');
const SendMessagesRequest = require('./Models/SendMessagesRequest');
const ConfirmDeliveryReportsAsReceivedRequest =
  require('./Models/ConfirmDeliveryReportsAsReceivedRequest');
const ConfirmDeliveryReportsAsReceivedRequest11 =
  require('./Models/ConfirmDeliveryReportsAsReceivedRequest11');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of messagemedia-messages
    Configuration,
    Logger,
    // controllers of messagemedia-messages
    MessagesController,
    DeliveryReportsController,
    RepliesController,
    // models of messagemedia-messages
    CheckDeliveryReportsResponse,
    ConfirmRepliesAsReceivedRequest8,
    ConfirmRepliesAsReceivedRequest,
    CheckRepliesResponse,
    CancelScheduledMessageRequest,
    SendMessagesResponse,
    SendMessagesRequest,
    ConfirmDeliveryReportsAsReceivedRequest,
    ConfirmDeliveryReportsAsReceivedRequest11,
    // exceptions of messagemedia-messages
    APIException,
    AuthHelper,
};

Logger.initialize();

module.exports = initializer;
