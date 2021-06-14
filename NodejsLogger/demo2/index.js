const logger = require('./logger');
// const logger = require('./logger/index_demo');

logger.info('text info', { meta: 1 });
logger.warn('text warn');
logger.error('text error');
logger.error(new Error('something went wrong buddy!!'));

logger.debug('text DEBUG'); // note: This will not show up probably because by default Logging level is set to Info & default is below (LOWER Severity) that)
// check different Logging level in winston - https://github.com/winstonjs/winston#logging-levels

/*console.log('hello');
console.info('text info');
console.warn('text warn');
console.error('text error');
console.error(new Error('something went wrong'));*/