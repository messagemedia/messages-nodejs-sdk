/**
 * messagemedia-messages
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

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
}

module.exports = BaseController;
