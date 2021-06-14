const { format, createLogger, transports } = require('winston');
const { timestamp, combine, printf, label, errors } = format;

// creating custom logging format using 'printf'
function buildDevLogger() {
  const logFormat = printf(({ level, message, label, timestamp, stack }) => {
    return `${timestamp} [${label}] ${level}: ${stack || message}`;
  });

  console.log("_______DEV LOGGER RUNNING________");

  return createLogger({
    // format: logFormat,
    // level: 'debug',
    format: combine(
      format.colorize(),
      label({label: 'Wohoooooo!! DEVELOPERS'}),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    ),
    transports: [new transports.Console()], // logging to console on Dev environment (we can log them in files on prod)
  });
}

module.exports = buildDevLogger;