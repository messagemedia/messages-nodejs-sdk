
'use strict';

const _configuration = require('../configuration');
const _crypto = require('crypto')
const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper() {
        return _objectMapperInstance;
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context) {
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

        if (_context.response.statusCode === 400) {
            returnObj.error.errorMessage = 'Request was invalid';
            returnObj.error.errorCode = 400;
        } else if (_context.response.statusCode === 404) {
            returnObj.error.errorMessage = 'Message not found';
            returnObj.error.errorCode = 404;
            returnObj.response = _context.response.body;
        } else {
            returnObj.error.errorMessage = 'HTTP Response Not OK';
            returnObj.error.errorCode = _context.response.statusCode;
        }

        return returnObj;
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
}

module.exports = BaseController;
