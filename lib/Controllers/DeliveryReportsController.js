/**
 * messagemedia-messages
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class DeliveryReportsController {
    /**
     * Check for any delivery reports that have been received.
     * Delivery reports are a notification of the change in status of a message as it is being
     * processed.
     * Each request to the check delivery reports endpoint will return any delivery reports
     * received that
     * have not yet been confirmed using the confirm delivery reports endpoint. A response from
     * the check
     * delivery reports endpoint will have the following structure:
     * ```json
     * {
     * "delivery_reports": [
     * {
     * "callback_url": "https://my.callback.url.com",
     * "delivery_report_id": "01e1fa0a-6e27-4945-9cdb-18644b4de043",
     * "source_number": "+61491570157",
     * "date_received": "2017-05-20T06:30:37.642Z",
     * "status": "enroute",
     * "delay": 0,
     * "submitted_date": "2017-05-20T06:30:37.639Z",
     * "original_text": "My first message!",
     * "message_id": "d781dcab-d9d8-4fb2-9e03-872f07ae94ba",
     * "vendor_account_id": {
     * "vendor_id": "MessageMedia",
     * "account_id": "MyAccount"
     * },
     * "metadata": {
     * "key1": "value1",
     * "key2": "value2"
     * }
     * },
     * {
     * "callback_url": "https://my.callback.url.com",
     * "delivery_report_id": "0edf9022-7ccc-43e6-acab-480e93e98c1b",
     * "source_number": "+61491570158",
     * "date_received": "2017-05-21T01:46:42.579Z",
     * "status": "enroute",
     * "delay": 0,
     * "submitted_date": "2017-05-21T01:46:42.574Z",
     * "original_text": "My second message!",
     * "message_id": "fbb3b3f5-b702-4d8b-ab44-65b2ee39a281",
     * "vendor_account_id": {
     * "vendor_id": "MessageMedia",
     * "account_id": "MyAccount"
     * },
     * "metadata": {
     * "key1": "value1",
     * "key2": "value2"
     * }
     * }
     * ]
     * }
     * ```
     * Each delivery report will contain details about the message, including any metadata
     * specified
     * and the new status of the message (as each delivery report indicates a change in status of
     * a
     * message) and the timestamp at which the status changed. Every delivery report will have a
     * unique delivery report ID for use with the confirm delivery reports endpoint.
     * *Note: The source number and destination number properties in a delivery report are the
     * inverse of
     * those specified in the message that the delivery report relates to. The source number of
     * the
     * delivery report is the destination number of the original message.*
     * Subsequent requests to the check delivery reports endpoint will return the same delivery
     * reports
     * and a maximum of 100 delivery reports will be returned in each request. Applications
     * should use the
     * confirm delivery reports endpoint in the following pattern so that delivery reports that
     * have been
     * processed are no longer returned in subsequent check delivery reports requests.
     * 1. Call check delivery reports endpoint
     * 2. Process each delivery report
     * 3. Confirm all processed delivery reports using the confirm delivery reports endpoint
     * *Note: It is recommended to use the Webhooks feature to receive reply messages rather
     * than
     * polling the check delivery reports endpoint.*
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCheckDeliveryReports(callback) {
        _logger.info('getCheckDeliveryReports being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for getCheckDeliveryReports');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/delivery_reports'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getCheckDeliveryReports');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-messages',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for getCheckDeliveryReports  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getCheckDeliveryReports...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getCheckDeliveryReports');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getCheckDeliveryReports...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getCheckDeliveryReports');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'CheckDeliveryReportsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getCheckDeliveryReports ');
                    errorResponse = _baseController.validateResponse(_context, 'getCheckDeliveryReports');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Mark a delivery report as confirmed so it is no longer return in check delivery reports
     * requests.
     * The confirm delivery reports endpoint is intended to be used in conjunction with the check
     * delivery
     * reports endpoint to allow for robust processing of delivery reports. Once one or more
     * delivery
     * reports have been processed, they can then be confirmed using the confirm delivery reports
     * endpoint so they
     * are no longer returned in subsequent check delivery reports requests.
     * The confirm delivery reports endpoint takes a list of delivery report IDs as follows:
     * ```json
     * {
     * "delivery_report_ids": [
     * "011dcead-6988-4ad6-a1c7-6b6c68ea628d",
     * "3487b3fa-6586-4979-a233-2d1b095c7718",
     * "ba28e94b-c83d-4759-98e7-ff9c7edb87a1"
     * ]
     * }
     * ```
     * Up to 100 delivery reports can be confirmed in a single confirm delivery reports request.
     *
     * @param {ConfirmDeliveryReportsAsReceivedRequest} body TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createConfirmDeliveryReportsAsReceived(body, callback) {
        _logger.info('createConfirmDeliveryReportsAsReceived being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        _logger.info('Preparing Query URL for createConfirmDeliveryReportsAsReceived');
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${'/v1/delivery_reports/confirmed'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for createConfirmDeliveryReportsAsReceived');
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagemedia-messages',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };
        _logger.debug(`'Raw request for createConfirmDeliveryReportsAsReceived  > ${JSON.stringify(_options)}'`);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for createConfirmDeliveryReportsAsReceived...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'createConfirmDeliveryReportsAsReceived');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for createConfirmDeliveryReportsAsReceived...  > ${JSON.stringify(_response)}'`);
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 400) {
                    _baseController.printErrorLog(_response.statusCode, 'createConfirmDeliveryReportsAsReceived');
                    const _err = { errorMessage: '', errorCode: 400, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    _logger.info('Validating response for createConfirmDeliveryReportsAsReceived ');
                    errorResponse = _baseController.validateResponse(_context, 'createConfirmDeliveryReportsAsReceived');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = DeliveryReportsController;
