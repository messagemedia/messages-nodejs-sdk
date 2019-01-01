
'use strict';

const winston = require('winston');

const LOGGER_NAME = 'messagemedia';

const _container = new winston.Container();

class LogConfig {
    static initialize() {
        _container.add(LOGGER_NAME, {
            console: {
                level: 'debug',
                label: 'MessageMedia SDK',
            },
        });
    }

    static setLogLevel(logLevel = 'debug') {
        _container.loggers[LOGGER_NAME].transports.console.level = logLevel;
    }

    static getLogger() {
        return _container.get(LOGGER_NAME);
    }
}

module.exports = LogConfig;
