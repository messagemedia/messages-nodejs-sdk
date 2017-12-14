/**
 * messagemedia-messages
 *
 */

'use strict';

const _configuration = require('../configuration');
const _crypto = require('crypto')
const _logger = require('winston');
const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
    static getSdkVersion()
    {
        return 'messagemedia-messages-nodejs-sdk-1.1.0';
    } 

    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper() {
        return _objectMapperInstance;
    }

     /**
     * Helper function to print error logging messages
     * @param    {number}    code        The error code which needs to be logged
     * @param    {string}    endpName    The name of endpoint making the call
     */
    static printErrorLog(code, endpName) {
        _logger.error(`'Status code: ${code} received for ${endpName}.`);
    }

    static createHmacSignature(date, contentSignature, url, body)
    {
        var requestType = "POST";

        if(body == null || body == undefined || body == '')
            requestType = "GET";


        var signingString = `date: ${date}\n${contentSignature}${requestType} ${url} HTTP/1.1`;
        var hash = _crypto.createHmac('sha1', _configuration.hmacAuthPassword).update(signingString).digest('base64');

        return hash;
    }

    static addHmacHeadersTo(headers, url, body)
    {
        var contentSignature = "";
        var contentHeader = "";
        var dateHeader = new Date().toGMTString();

        if(body != null && body != undefined && body != '')
        {
            var contentHash = _crypto.createHash('md5').update(body).digest("hex");
            contentSignature = `x-Content-MD5: ${contentHash}\n`;
            contentHeader = "x-Content-MD5 ";
            headers["x-Content-MD5"] = contentHash;
        }

        headers["date"] = dateHeader;

        var hmacSignature = this.createHmacSignature(dateHeader, contentSignature, url, body);
        var hmacHeader = `hmac username="${_configuration.hmacAuthUserName}", algorithm="hmac-sha1", headers="date ${contentHeader}request-line", signature="${hmacSignature}"`;

        headers["Authorization"] = hmacHeader
    }

    /**
    * Helper function to add the authentication headers
     * @param    {array}     options               The request options
     * @param    {array}     headers               The request headers
     * @param    {string}    url                   The target url 
     * @param    {string}    body                  The JSON body for the request
    */
    static applyAuthentication(options, headers, url, body)
    {
        if(_configuration.hmacAuthUserName != null && _configuration.hmacAuthUserName != '' &&
           _configuration.hmacAuthPassword != null && _configuration.hmacAuthPassword != '')
        {
            this.addHmacHeadersTo(headers, url, body);
        }
        else
        {
            options["username"] = _configuration.basicAuthUserName;
            options["password"] = _configuration.basicAuthPassword;
        }
    }

    /**
    * Helper function to add the optional account header if we have it
     * @param    {array}     headers               The error code which needs to be logged
     * @param    {string}    accountHeaderValue    The account value to pass to API
    */
    static addAccountHeader(headers, accountHeaderValue)
    {
        if(accountHeaderValue != null && accountHeaderValue != undefined && accountHeaderValue != '')
        {
            headers["Account"] = accountHeaderValue;
        }
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @param   {string}        endpName   Name of the endpoint called
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context, endpName) {
        const errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        const returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        BaseController.printErrorLog(_context.response.statusCode, endpName);

        returnObj.error.errorMessage = 'HTTP Response Not OK';
        returnObj.error.errorCode = _context.response.statusCode;

        return returnObj;
    }
}

module.exports = BaseController;