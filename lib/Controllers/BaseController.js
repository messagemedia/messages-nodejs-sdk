/**
 * messagemedia-messages
 *
 */

'use strict';

const logger = require('winston');
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
     * Helper function to print error logging messages
     * @param    {number}    code        The error code which needs to be logged
     * @param    {string}    endpName    The name of endpoint making the call
     */
    static printErrorLog(code, endpName) {
        logger.error(`'Status code: ${code} received for ${endpName}.`);
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
