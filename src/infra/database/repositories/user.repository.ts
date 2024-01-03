import {Inject, Injectable} from "@nestjs/common";

import {user} from "@database/models";
import {DATABASE_PROVIDER} from "@valueObjects/database.valueObject";

import {BaseRepository} from "./base.repository";

import type {MySql2Database} from "drizzle-orm/mysql2";

@Injectable()
export class UserRepository extends BaseRepository {
    constructor(@Inject(DATABASE_PROVIDER.MYSQL) dataSource: MySql2Database) {
        super(dataSource, user);
    }
}
