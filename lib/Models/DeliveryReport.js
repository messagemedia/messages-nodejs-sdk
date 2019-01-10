
'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of DeliveryReport
 */
class DeliveryReport extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.callbackUrl = this.constructor.getValue(obj.callbackUrl || obj.callback_url);
        this.dateReceived = this.constructor.getValue(obj.dateReceived || obj.date_received);
        this.delay = this.constructor.getValue(obj.delay);
        this.deliveryReportId =
          this.constructor.getValue(obj.deliveryReportId
     || obj.delivery_report_id);
        this.messageId = this.constructor.getValue(obj.messageId || obj.message_id);
        this.metadata = this.constructor.getValue(obj.metadata);
        this.originalText = this.constructor.getValue(obj.originalText || obj.original_text);
        this.sourceNumber = this.constructor.getValue(obj.sourceNumber || obj.source_number);
        this.status = this.constructor.getValue(obj.status);
        this.submittedDate = this.constructor.getValue(obj.submittedDate || obj.submitted_date);
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
            {
                name: 'dateReceived',
                realName: 'date_received',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'delay', realName: 'delay' },
            { name: 'deliveryReportId', realName: 'delivery_report_id' },
            { name: 'messageId', realName: 'message_id' },
            { name: 'metadata', realName: 'metadata' },
            { name: 'originalText', realName: 'original_text' },
            { name: 'sourceNumber', realName: 'source_number' },
            { name: 'status', realName: 'status' },
            {
                name: 'submittedDate',
                realName: 'submitted_date',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
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

module.exports = DeliveryReport;
