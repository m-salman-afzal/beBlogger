import {Inject, Injectable} from "@nestjs/common";

import {USER_PROVIDER} from "@valueObjects/user.valueObject";

import type {UserRepository} from "@infra/database/repositories/user.repository";

@Injectable()
export class UserService {
    constructor(@Inject(USER_PROVIDER.USER_REPOSITORY) private userRepository: UserRepository) {}

    async findUser() {
        const asd = await this.userRepository.findOne();

        return asd;
    }

    getUsers() {
        return "Hello Users!";
    }
}
