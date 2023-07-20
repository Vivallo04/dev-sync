import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Repository extends Model {
    @Column
    name: string

    @Column
    description: string

    @Column
    creationDate: Date

    @Column
    lastPushDate: Date

    @Column
    repositoryUrl: string

    @Column
    cloneUrl: string

    @Column
    stars: number

    @Column
    repositorySize: number

    @Column
    repositoryOwner: string
}