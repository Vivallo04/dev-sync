import { Sequelize } from 'sequelize-typescript';
import { Repository } from '../models/repository.model';


export const connectToDatabase = () => {

    const hostName = process.env.DB_HOST;
    const userName = "postgres";
    const password = "7792";
    const database = process.env.DATABASE;
    const dialect: any = 'postgres';
    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
            evict: 10000
        }
    });

    sequelize.addModels([Repository]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

};