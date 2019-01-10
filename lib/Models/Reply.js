
'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Reply
 */
class Reply extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.callbackUrl = this.constructor.getValue(obj.callbackUrl || obj.callback_url);
        this.content = this.constructor.getValue(obj.content);
        this.dateReceived = this.constructor.getValue(obj.dateReceived || obj.date_received);
        this.destinationNumber =
          this.constructor.getValue(obj.destinationNumber
     || obj.destination_number);
        this.messageId = this.constructor.getValue(obj.messageId || obj.message_id);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.replyId = this.constructor.getValue(obj.replyId || obj.reply_id);
        this.sourceNumber = this.constructor.getValue(obj.sourceNumber || obj.source_number);
        this.vendorAccountId =
          this.constructor.getValue(obj.vendorAccountId
     || obj.vendor_account_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'callbackUrl', realName: 'callback_url' },
            { name: 'content', realName: 'content' },
            {
                name: 'dateReceived',
                realName: 'date_received',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'destinationNumber', realName: 'destination_number' },
            { name: 'messageId', realName: 'message_id' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'replyId', realName: 'reply_id' },
            { name: 'sourceNumber', realName: 'source_number' },
            { name: 'vendorAccountId', realName: 'vendor_account_id', type: 'VendorAccountId' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Reply;
