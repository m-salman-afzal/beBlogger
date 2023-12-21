import {databaseConfig} from "@infraConfig/index.config";
import {DATABASE_PROVIDER} from "@valueObjects/database.valueObject";
import {drizzle} from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import * as schema from "./models/user.model";

export const databaseProviders = [
    {
        provide: DATABASE_PROVIDER.MYSQL,
        useFactory: async () => {
            const connection = await mysql.createConnection({
                host: databaseConfig.DB_HOST,
                port: databaseConfig.DB_PORT,
                user: databaseConfig.DB_USERNAME,
                password: databaseConfig.DB_PASSWORD,
                database: databaseConfig.DB_NAME
            });

            const db = drizzle(connection, {schema, mode: "default", logger: databaseConfig.DB_LOGGING});

            return db;
        },
        exports: [DATABASE_PROVIDER.MYSQL]
    }
];
