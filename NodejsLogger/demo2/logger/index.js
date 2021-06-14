const buildDevLogger = require('./dev-logger');
const buildProdLogger = require('./prod-logger');
require('dotenv').config(); // Environment Variables from .env file

let logger = null;
if (process.env.NODE_ENV.trim() === 'development') {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

module.exports = logger;