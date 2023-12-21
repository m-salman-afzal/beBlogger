import {Inject, Injectable} from "@nestjs/common";

import {UserRepository} from "@infra/database/repositories/user.repository";

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(createUserDto: any) {
        const asd = await this.userRepository.insert({name: "asd"});
    }

    getUsers() {
        return "Hello Users!";
    }
}
