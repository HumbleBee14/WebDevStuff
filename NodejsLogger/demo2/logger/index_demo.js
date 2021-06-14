const winston = require('winston');

const { timestamp, combine, printf, errors } = winston.format;

const logger = winston.createLogger({
  // level: 'debug', // setting custom Logging level (severity level)
  format: winston.format.simple(),
  // defaultMeta: {service: 'user-service'},
  transports: [ // specify where you'd like to write all the logs to
    new winston.transports.Console(), //  to get logs on the console itself
  ],

});

module.exports = logger;
