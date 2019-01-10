
'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Message
 */
class Message extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.callbackUrl = this.constructor.getValue(obj.callbackUrl || obj.callback_url);
        this.content = this.constructor.getValue(obj.content);
        this.destinationNumber =
          this.constructor.getValue(obj.destinationNumber
     || obj.destination_number);
        this.deliveryReport =
          this.constructor.getValue(obj.deliveryReport
     || obj.delivery_report, false);
        this.format = this.constructor.getValue(obj.format);
        this.messageExpiryTimestamp =
          this.constructor.getValue(obj.messageExpiryTimestamp
     || obj.message_expiry_timestamp);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.scheduled = this.constructor.getValue(obj.scheduled);
        this.sourceNumber = this.constructor.getValue(obj.sourceNumber || obj.source_number);
        this.sourceNumberType =
          this.constructor.getValue(obj.sourceNumberType
     || obj.source_number_type);
        this.messageId = this.constructor.getValue(obj.messageId || obj.message_id);
        this.status = this.constructor.getValue(obj.status);
        this.media = this.constructor.getValue(obj.media);
        this.subject = this.constructor.getValue(obj.subject);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'callbackUrl', realName: 'callback_url' },
            { name: 'content', realName: 'content' },
            { name: 'destinationNumber', realName: 'destination_number' },
            { name: 'deliveryReport', realName: 'delivery_report' },
            { name: 'format', realName: 'format' },
            {
                name: 'messageExpiryTimestamp',
                realName: 'message_expiry_timestamp',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'metadata', realName: 'metadata' },
            {
                name: 'scheduled',
                realName: 'scheduled',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'sourceNumber', realName: 'source_number' },
            { name: 'sourceNumberType', realName: 'source_number_type' },
            { name: 'messageId', realName: 'message_id' },
            { name: 'status', realName: 'status' },
            { name: 'media', realName: 'media', array: true },
            { name: 'subject', realName: 'subject' },
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

module.exports = Message;
