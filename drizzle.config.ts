import {databaseConfig} from "@infraConfig/index.config";
import type {Config} from "drizzle-kit";

export default {
    driver: "mysql2",
    schema: "./src/infra/database/models/*",
    out: "./src/infra/database/migrations",
    dbCredentials: {
        host: databaseConfig.DB_HOST,
        port: databaseConfig.DB_PORT,
        user: databaseConfig.DB_USERNAME,
        password: databaseConfig.DB_PASSWORD,
        database: databaseConfig.DB_NAME
    }
} satisfies Config;
