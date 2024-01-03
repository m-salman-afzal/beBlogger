import type {MySqlTable} from "drizzle-orm/mysql-core";
import type {MySql2Database} from "drizzle-orm/mysql2";

export class BaseRepository {
    private readonly databaseProvider: MySql2Database;
    protected readonly model: MySqlTable;

    constructor(dataSource: MySql2Database, schema: MySqlTable) {
        this.databaseProvider = dataSource as MySql2Database;
        this.model = schema;
    }

    async findOne() {
        return await this.databaseProvider.select().from(this.model);
    }
}
