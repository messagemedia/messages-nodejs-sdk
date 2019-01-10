
'use strict';

const ConfirmDeliveryReportsAsReceivedRequest1 =
  require('../lib/Models/ConfirmDeliveryReportsAsReceivedRequest1');
const ConfirmDeliveryReportsAsReceivedRequest =
  require('../lib/Models/ConfirmDeliveryReportsAsReceivedRequest');
const CheckDeliveryReportsResponse = require('../lib/Models/CheckDeliveryReportsResponse');
const ConfirmRepliesAsReceivedRequest1 = require('../lib/Models/ConfirmRepliesAsReceivedRequest1');
const ConfirmRepliesAsReceivedRequest = require('../lib/Models/ConfirmRepliesAsReceivedRequest');
const VendorAccountId = require('../lib/Models/VendorAccountId');
const CheckRepliesResponse = require('../lib/Models/CheckRepliesResponse');
const CancelScheduledMessageRequest = require('../lib/Models/CancelScheduledMessageRequest');
const SendMessagesRequest = require('../lib/Models/SendMessagesRequest');
const Reply = require('../lib/Models/Reply');
const DeliveryReport = require('../lib/Models/DeliveryReport');
const GetMessageStatusResponse = require('../lib/Models/GetMessageStatusResponse');
const Message = require('../lib/Models/Message');
const SendMessagesResponse = require('../lib/Models/SendMessagesResponse');
const SendMessages400ResponseException =
  require('../lib/Exceptions/SendMessages400ResponseException');

const classMap = {
    ConfirmDeliveryReportsAsReceivedRequest1,
    ConfirmDeliveryReportsAsReceivedRequest,
    CheckDeliveryReportsResponse,
    ConfirmRepliesAsReceivedRequest1,
    ConfirmRepliesAsReceivedRequest,
    VendorAccountId,
    CheckRepliesResponse,
    CancelScheduledMessageRequest,
    SendMessagesRequest,
    Reply,
    DeliveryReport,
    GetMessageStatusResponse,
    Message,
    SendMessagesResponse,
    SendMessages400ResponseException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
