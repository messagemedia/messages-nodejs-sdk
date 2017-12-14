/**
 * messagemedia-messages
 *
 */
 'use strict';

const configuration = require("../lib/configuration");

const testConfiguration = {
    ASSERT_PRECISION: 0.01,
    TEST_TIMEOUT: 30000
};

configuration.basicAuthUserName = process.env.MessageMediaApiTestsKey;
configuration.basicAuthPassword = process.env.MessageMediaApiTestsSecret;

module.exports = testConfiguration;
