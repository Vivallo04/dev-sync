import { ApiLogger } from "../logger/api.logger";
import { RepoRepository } from "../repository/repo.repository";

export class RepositoryService {
 
    private repoRepository: RepoRepository;
    private logger: ApiLogger;

    constructor() {
        this.logger = new ApiLogger();
        this.repoRepository = new RepoRepository();
    
    }

    public async getRepositoryList() {
        this.logger.debug("Service: Get Repository");
        return await this.repoRepository.getRepositoryList();
    }

    
}