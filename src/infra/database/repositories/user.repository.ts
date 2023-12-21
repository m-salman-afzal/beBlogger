import {Inject, Injectable} from "@nestjs/common";

import {DATABASE_PROVIDER} from "@valueObjects/database.valueObject";
import {PlanetScaleDatabase} from "drizzle-orm/planetscale-serverless";

import {user} from "../models/user.model";

@Injectable()
export class UserRepository {
    constructor(@Inject(DATABASE_PROVIDER.MYSQL) private readonly userModel: PlanetScaleDatabase) {}
    async findOne(entity: any) {
        return await this.userModel.select().from(user);
    }

    async insert(entity: any) {
        return await this.userModel.insert(user).values(entity);
    }
}
