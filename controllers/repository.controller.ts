import { ApiLogger } from "../logger/api.logger";
import { RepositoryService } from "../services/repository.service";

export class RepositoryController {
    private repositoryService: RepositoryService;
    private logger: ApiLogger;

    constructor() {
        this.repositoryService = new RepositoryService();
        this.logger = new ApiLogger();
        this.logger.debug("👾 Initiating Repository Controller");
    }
    
    public async getRepositoryList(req, res) {
        this.logger.debug("🌟 Controller: Get Repository");

        try {
            const repositories = await this.repositoryService.getRepositoryList();

            if (repositories == null) {
                res.status(404).send("No repositories were found.");
            } else {
                res.status(200).send(repositories);
            }
        } catch(error) {
            res.status(500).send("Internal server error.");
        }
    }

}