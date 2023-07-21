import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import { ApiLogger } from './logger/api.logger';
import { RepositoryController } from './controllers/repository.controller';
import { Request, Response } from "express-serve-static-core";


class App {

    public express = express.application;
    public logger: ApiLogger = new ApiLogger();
    public repositoryController: RepositoryController;

    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    private apiBasePath: string = "/api";

    constructor() {
        this.express = express();
        this.setMiddleware();
        this.setRoutes();
        this.logger = new ApiLogger();
        this.repositoryController = new RepositoryController();
    }

    // Configure Express middleware.
    private setMiddleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private setRoutes(): void {
        this.express.get(this.apiBasePath + "/ping", (req: Request, res: Response, next) => {
            this.logger.debug("🌟 Controller: Ping");
            res.send("Pong!");
        });
        
        // handle repository routes
        this.express.get(this.apiBasePath + "/repositorylist", (req, res, next) => {
            this.logger.debug("🌟 Controller: Get Repository List");

            try {
                // @ts-ignore
                this.repositoryController.getRepositoryList(req, res).then((data) => {
                    res.send(data);
                });
            } catch(error) {
                res.status(404).send("No repositories were found.");
            }
        });

        // swagger docs
        this.express.use('/', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            // Send 404 status code for undefined routes
            res.status(404).send("This route does not exist.");
        });
    }
}

export default new App().express;