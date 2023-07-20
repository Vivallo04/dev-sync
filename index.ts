import { ApiLogger } from "./logger/api.logger";
import App from "./app";
import * as http from 'http';

const port = process.env.PORT || 5000;

App.set('port', port);

const server = http.createServer(App);
server.listen(port);

const logger = new ApiLogger();

server.on('listening', () => {
    const address = server.address();
    const bind = (typeof address === 'string') ? `pipe ${address}` : `port ${address.port}`;
    logger.debug(`🏁 Server started at port localhost:${port}`);
    logger.debug(`🎯 Listening on ${bind} `);
});