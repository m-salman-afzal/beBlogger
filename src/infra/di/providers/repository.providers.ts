import {UserRepository} from "@infra/database/repositories/user.repository";
import {DATABASE_PROVIDER} from "@valueObjects/database.valueObject";
import {USER_PROVIDER} from "@valueObjects/user.valueObject";

import type {MySql2Database} from "drizzle-orm/mysql2";

export const repositoryProviders = [
    {
        provide: USER_PROVIDER.USER_REPOSITORY,
        useFactory: (dataSource: MySql2Database) => new UserRepository(dataSource),
        inject: [DATABASE_PROVIDER.MYSQL]
    }
];
