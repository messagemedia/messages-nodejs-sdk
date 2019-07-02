
'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

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
    static checkDeliveryReports(callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        let _requestUrl = '/v1/delivery_reports';

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${_requestUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'messagemedia-messages',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers
        };

        _baseController.applyAuthentication(_options, _headers, _requestUrl);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'CheckDeliveryReportsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
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
    static confirmDeliveryReportsAsReceived(body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        const _requestUrl = '/v1/delivery_reports/confirmed';

        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        const _queryBuilder = `${_baseUri}${_requestUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'user-agent': 'messagemedia-messages',
        };

        // remove null values
        _apiHelper.cleanObject(body);

        var jsonBody = _apiHelper.jsonSerialize(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: jsonBody
        };

        _baseController.applyAuthentication(_options, _headers, _requestUrl, jsonBody);

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _callback(null, {}, _context);
                    _fulfill({});
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = DeliveryReportsController;
