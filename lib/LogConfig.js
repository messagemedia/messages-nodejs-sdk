
'use strict';

const logger = require('winston');

class LogConfig {
    static LogConfig() {
        logger.configure({
            transports: [
                new (logger.transports.Console)({
                    level: 'info',
                    colorize: true,
                    timestamp: true,
                }),
                new (logger.transports.File)({
                    filename: 'logfile.log',
                    level: 'debug',
                    colorize: true,
                    timestamp: true,
                }),
            ],
        });
    }
}

module.exports = LogConfig;
