import { connectToDatabase } from "../config/db.config";
import { ApiLogger } from "../logger/api.logger";
import { Repository } from "../models/repository.model";
import { Util } from "../util/util";

export class RepoRepository {
   
    private gotRepository: any;
    private logger: ApiLogger;
    private database: any = {};

    constructor() {
        this.logger = new ApiLogger();
        this.gotRepository;
        this.configureDatabase();
    }

    private configureDatabase() {
        this.database = connectToDatabase();
        this.database.sequelize.sync({ 
            force: false })
            .then(() => {
                this.logger.debug("✅ Database connection established");
        })
        .catch((err: any) => {
            this.logger.error("Unable to connect to database", err);
        });

        this.gotRepository = this.database.sequelize.getRepository(Repository);
    }

    public async getRepositoryList(): Promise<Repository> {
        this.logger.debug("Repository: Get Repository List");
        try {
            const repositories = await this.gotRepository.findAll();

            if (Util.isEmptyArray(repositories)) {
                this.logger.error("Repository: Get Got List", "No repositories found");
                return null;
            }

            return repositories;

        } catch (error) {
            this.logger.error("Repository: Get Got List", error);
            throw error;
        }
    }
}