const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;

function buildProdLogger() {
  console.log("_______PROD LOGGER RUNNING________"); // comment it later

  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()), // json format is suitable for production level logs (so that other log aggregators services(like datadog) can easily handle these)
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
}
// Note: Don't use 'colorise' on prod with json
module.exports = buildProdLogger;