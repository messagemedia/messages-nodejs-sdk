/**
 * messagemedia-messages
 *
 */

'use strict';

const CheckDeliveryReportsResponse = require('../lib/Models/CheckDeliveryReportsResponse');
const ConfirmRepliesAsReceivedRequest8 = require('../lib/Models/ConfirmRepliesAsReceivedRequest8');
const ConfirmRepliesAsReceivedRequest = require('../lib/Models/ConfirmRepliesAsReceivedRequest');
const CheckRepliesResponse = require('../lib/Models/CheckRepliesResponse');
const CancelScheduledMessageRequest = require('../lib/Models/CancelScheduledMessageRequest');
const SendMessagesResponse = require('../lib/Models/SendMessagesResponse');
const SendMessagesRequest = require('../lib/Models/SendMessagesRequest');
const ConfirmDeliveryReportsAsReceivedRequest =
  require('../lib/Models/ConfirmDeliveryReportsAsReceivedRequest');
const ConfirmDeliveryReportsAsReceivedRequest11 =
  require('../lib/Models/ConfirmDeliveryReportsAsReceivedRequest11');

const classMap = {
    CheckDeliveryReportsResponse,
    ConfirmRepliesAsReceivedRequest8,
    ConfirmRepliesAsReceivedRequest,
    CheckRepliesResponse,
    CancelScheduledMessageRequest,
    SendMessagesResponse,
    SendMessagesRequest,
    ConfirmDeliveryReportsAsReceivedRequest,
    ConfirmDeliveryReportsAsReceivedRequest11,
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
