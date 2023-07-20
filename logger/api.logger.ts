const pine = require('pine');

const logger = pine();

export class ApiLogger {
    debug(message: string): void {
        logger.debug(message, null);
    }
    
    info(message: any, data: any): void {
        logger.info(message, data);
    }

    error(message: any, error: any): void {
        logger.error(message, error);
    }

}