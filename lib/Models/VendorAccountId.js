
'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of VendorAccountId
 */
class VendorAccountId extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.vendorId = this.constructor.getValue(obj.vendorId || obj.vendor_id);
        this.accountId = this.constructor.getValue(obj.accountId || obj.account_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'vendorId', realName: 'vendor_id' },
            { name: 'accountId', realName: 'account_id' },
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

module.exports = VendorAccountId;
