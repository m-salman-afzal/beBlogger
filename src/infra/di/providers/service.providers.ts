import {UserService} from "@services/user.service";
import {USER_PROVIDER} from "@valueObjects/user.valueObject";

import type {UserRepository} from "@infra/database/repositories/user.repository";

export const serviceProviders = [
    {
        provide: USER_PROVIDER.USER_SERVICE,
        useFactory: (userRepository: UserRepository) => new UserService(userRepository),
        inject: [USER_PROVIDER.USER_REPOSITORY]
    }
];
